import React from "react";
import type { NextPage, GetStaticPropsResult } from "next";
import Link from "next/link";
import axios from 'axios';
import { Layout } from "../components/";
import { ModProps } from "../components/Submissions/CurseMod";
import SubmissionBox from "../components/Submissions/SubmissionBox";
import SubmissionForm from "../components/Submissions/SubmissionForm";

const projectIds: { [key: string]: number[] } = {

  '2021': [],
  '2020': [
    410698,
    421252,
    424431,
    420409,
    420919,
    426031,
    425745,
    426387,
    426690,
    420458,
    420856,
    430836
  ],
  '2019': [
    353942,
    355369,
    354046,
    353158,
    354985,
    355405,
    355419,
    356599
  ],
  '2018': [
    308081,
    308265,
    308663,
    309675,
    309710,
    309786,
    309838,
    310088
  ],
}

const SubmissionsPage: NextPage<StaticProps> = (props) => {

  const currentYear = "2021";
  const submissionsClosed = true;

  return (
    <Layout title="Submissions" url="/submissions">
      <div className="text-center text-primary m-2 p-2 md:mb-5 md:p-5 border border-primary rounded-lg bg-secondary bg-opacity-40 shadow-lg ">

        <SubmissionBox name={currentYear} entries={props[currentYear]}>
          <p className='text-base sm:text-2xl'>
            Submissions for our 2021 event will be open from December 1st, 2021 until January 14th, 2022.<br />
            
            {!submissionsClosed && <><br />
            You can submit your project <div className="underline hover:text-important inline"><Link href="#submit" shallow replace>using the form below</Link></div>.</>}
          </p>
        </SubmissionBox>
        {Object.keys(projectIds).filter(it => it !== currentYear).sort().reverse().map((year) => {
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
      modLoaders: res.data.modLoaders ?? new Array<string>()
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
      modLoaders: new Array<string>()
    }
  });

}

interface StaticProps {

  [key: string]: ModProps[];
}

export async function getStaticProps(): Promise<GetStaticPropsResult<StaticProps>> {

  let props: StaticProps = {};

  for (const key in projectIds) {
    const mods = [];
    for (const curseId of projectIds[key] as number[]) {
      mods.push(await fetchModData(curseId));
    }
    props[key] = mods;
  }

  return {
    props,
    revalidate: 6 * 60 * 60
  };
}

export default SubmissionsPage;
