import React from "react";

export function Rules() {
  return (
    <div
      id="rules"
      className="lg:w-2/3 md:w-5/6 mx-auto text-white text-xl mb-10"
    >
      <h2>Rules</h2>
      <ol className="list-decimal">
        <li>
          <b>
            Submissions must only be developed from December 1st to January 14th
            UTC.
          </b>
          <br />
          You may come up with ideas and plan your project in advance, but all
          code, assets, textures, sounds, and models must be made during the
          specified time.
        </li>
        <li>
          <b>Submissions should fit with the broader themes of WinterJam.</b>
          <br />
          These themes include anything that is related to winter or holidays.
        </li>
        <li>
          <b>
            Submissions must load on clients and dedicated servers without
            crashing the game.
          </b>
          <br />
          Targeting only one of these environments is fine as long as loading in
          an unsupported environment does not crash the game or cause the game
          to be unplayable.
        </li>
        <li>
          <b>
            Submissions must be compatible with Minecraft 1.17.1 and either
            Forge or Fabric.
          </b>
        </li>
        <li>
          <b>
            Third party dependencies such as libraries, frameworks, APIs, and
            other mods are allowed.
          </b>
          <br />
          Your project will be accountable for any issues caused by your
          dependencies. You are also required to disclose all required
          dependencies when submitting your project through our form.
        </li>
        <li>
          <b>Teams are allowed.</b>
          <br /> There are no limits to the size of a team, and participants may
          contribute to multiple teams. If a team submission wins a prize, the
          team is responsible for deciding how that prize will be shared amongst
          its members.
        </li>
        <li>
          <b>
            Submissions from MMD team members or those who are employed by event
            sponsors are not eligible to win prizes during this event.
          </b>
          <br />
          Submissions from teams that they are a part of will also not be
          eligible for winning prizes.
        </li>
        <li>
          <b>
            Submissions must not contain malicious code or act in bad faith.
          </b>
          <br />
          For example, crashing the game, making the game unplayable, or
          tampering with other submissions are not allowed.
        </li>
        <li>
          <b>
            Submissions must be uploaded to CurseForge before the submission
            deadline.
          </b>
          <br />
          They must also pass CurseForge&apos;s standard project review.
          Participants are encouraged to upload their projects as soon as
          possible, as this review process can take some time to complete.
        </li>
      </ol>
    </div>
  );
}
