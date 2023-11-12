import axios from 'axios';
import fs from 'fs';
import type { GetStaticPropsResult, NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Layout } from "../components/";
import { ModProps } from "../components/Submissions/CurseMod";
import SubmissionBox from "../components/Submissions/SubmissionBox";
import SubmissionForm from "../components/Submissions/SubmissionForm";

import { getModIDs } from "../lib/modIdParser";

const SubmissionsPage: NextPage<StaticProps> = (props) => {

  const currentYear = "2022";
  const submissionsClosed = false;

  return (
    <Layout title="Submissions" url="/submissions">
      <div className="p-2 m-2 text-center border rounded-lg shadow-lg text-primary md:mb-5 md:p-5 border-primary bg-secondary bg-opacity-40 ">

        <SubmissionBox name={currentYear} entries={props[currentYear]}>
          <p className='text-base sm:text-2xl'>
            Submissions for our 2022 event will be open from November 12th, 2022 until December 31st 2022.<br />
            
            {!submissionsClosed && <><br />
            You can submit your project <div className="inline underline hover:text-important"><Link href="https://forms.gle/QDSqajHDHSaa8TxK7" shallow replace>using this form</Link></div>.</>}
          </p>
        </SubmissionBox>
        {Object.keys(props).filter(it => it !== currentYear).sort().reverse().map((year) => {
          const projects = props[year];
          return (projects?.length > 0) ? (<SubmissionBox name={year} entries={projects} key={"submissions-" + year} />) : undefined;
        })
        }
        <SubmissionForm disabled={submissionsClosed} />
      </div>
    </Layout>
  );
};

type CurseStub = {
  name: string;
  authors: { name: string, url: string }[]
  websiteUrl: string;
  summary: string;
  downloadCount: string;
  attachments: { isDefault: boolean, url: string }[];
  modLoaders: string[];
}

async function fetchModData(curseId: number): Promise<ModProps> {

  return axios.get<CurseStub>(`https://addons-ecs.forgesvc.net/api/v2/addon/${curseId}`).then(res => {

    return {
      name: res.data.name,
      author: res.data.authors.map(auth => {
        return { name: auth.name, url: auth.url }
      }),
      homepage: res.data.websiteUrl,
      logo: res.data.attachments.filter(a => a.isDefault)[0].url,
      downloads: res.data.downloadCount,
      summary: res.data.summary,
      modLoaders: res.data.modLoaders ?? new Array<string>(),
      id: curseId,
    };
  }).catch(err => {
    console.log(err);
    return {
      name: 'Unknown Mod',
      author: [{ name: "Unknown", url: "https://example.com" }],
      homepage: 'https://www.curseforge.com/minecraft',
      logo: 'https://media.forgecdn.net/avatars/84/193/636193647832736518.gif',
      downloads: '-1',
      summary: `Could not get data for modId ${curseId}.`,
      modLoaders: new Array<string>(),
      id: -1,
    }
  });

}

interface StaticProps {

  [key: string]: ModProps[];
}

export async function getStaticProps(): Promise<GetStaticPropsResult<StaticProps>> {

  const props: StaticProps = {};

  if(fs.existsSync('./submissions')) {
    await Promise.all(fs.readdirSync('./submissions').map(async file => {
      const year = file.split('.')[0];

      const curseIds = await getModIDs(year);
      const mods = await Promise.all(curseIds.flatMap(id => fetchModData(id)));
      props[year] = mods;
    }));
  }

  return {
    props,
    revalidate: 6 * 60 * 60
  };
}

export default SubmissionsPage;
