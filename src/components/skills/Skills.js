import React from "react";
import Image from "next/legacy/image";
import { design } from "@/assets/icons";
import { code } from "@/assets/icons";
import { consulting } from "@/assets/icons";

const Skills = () => {
  return (
    <section id="skills">
      <div>
        <h3 className="text-3xl py-1 dark:text-gray-400">My Skills</h3>
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-gray-100">
          Hello everyone, I'm originally from Toronto, Canada, and now living in DMV(Alexandria, VA).
Being a software developer with a background in computer science and a passion for realestate technology,
 I utilize creativity to help me communicate ideas and solve problems. 
If I'm not coding, you will find me either digitally illustrating away on my iPad or playing video games. 
 
 I am <span className="text-teal-500">confident</span> in
          my ability to create innovative{" "}
          <span className="text-teal-500">solutions</span> to complex problems.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-gray-100">
          As a new software engineer, I bring a{" "}
          <span className="text-teal-500">unique</span> perspective to the table
          and am always eager to take on new{" "}
          <span className="text-teal-500">challenges</span> and continue to
          expand my knowledge.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
          <Image src={code} alt="coding image" width={100} height={100} />
          <h3 className="pt-8 pb-2 text-lg font-medium dark:text-gray-400">
            Programing Skills
          </h3>
          <p className="py-2 dark:text-gray-100">I love learning new skills</p>
          <h4 className="py-5 text text-teal-600">My toolbox</h4>
          <p className="py-1 text-gray-800 dark:text-gray-100">Javascript</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">React</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Flask</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Git</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Python</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Firebase</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">SQL</p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
          <Image src={design} alt="design image" width={100} height={100} />
          <h3 className="pt-8 pb-2 text-lg font-medium dark:text-gray-400">
            Digital Marketing Skills
          </h3>
          <p className="py-2 dark:text-gray-100">
            I love creating meaningful informative messages 
          </p>
          <h4 className="py-5 text text-teal-600">Marketing tools I use</h4>
          <p className="py-1 text-gray-800 dark:text-gray-100">Hubspot</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Mailchip</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Zoho</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">My Fav Hunter</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Slack</p>

        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
          <Image
            src={consulting}
            alt="thumbs up image"
            width={100}
            height={100}
          />
          <h3 className="pt-8 pb-2 text-lg font-medium dark:text-gray-400">
            Bonus Skills
          </h3>
          <p className="py-2 dark:text-gray-100">Other self learned Skills</p>
          <h4 className="py-5 text text-teal-600">My skills</h4>
          <p className="py-1 text-gray-800 dark:text-gray-100">
            Data Engineering
          </p>
          <p className="py-1 text-gray-800 dark:text-gray-100">Motivated</p>
          <p className="py-1 text-gray-800 dark:text-gray-100">
            Machine learning/ R program
          </p>
          <p className="py-1 text-gray-800 dark:text-gray-100">
            Strong analytical skills
          </p>
          <p className="py-1 text-gray-800 dark:text-gray-100">
            Positive attitude
          </p>
          <p className="py-1 text-gray-800 dark:text-gray-100">
            Execellent communication skills
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
