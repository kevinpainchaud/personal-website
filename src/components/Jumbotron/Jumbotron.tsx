import React from "react";
import dayjs from "dayjs";

import { dates } from "../../data";

export const Jumbotron = () => (
  <p className="leading-9 text-md text-slate-800 dark:text-white md:leading-10 md:text-lg">
    Bonjour 👋,
    <br />
    Je suis <span className="font-bold">Kévin Painchaud</span>, Lead Front-End
    Developer.
    <br />
    Depuis un peu plus de {dayjs().diff(
      dates.firstExperienceStartDate,
      "year"
    )}{" "}
    ans maintenant, je me passionne pour l'informatique et plus particulièrement
    pour le web.
    <br />
    J'aime créer des interfaces de qualité, en prenant soin de garantir la
    meilleur expérience, à la fois pour l'utilisateur mais aussi pour le
    développeur.
  </p>
);
