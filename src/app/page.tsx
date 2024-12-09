import IndexHome from "@/sections/home/IndexHome";

import data from "@/data/data.json";
import { Assets } from "@/assets";
import { endpoints } from "@/utils/axios";
import getData from "@/fetch/getData";
import { SLUG_USER } from "@/utils/constants";

const { aboutMe, skills } = data;
export default async function Home() {
  const res = await getData({
    api: endpoints.portfolio.portfolioById + "5",
    option: {
      next: {
        tags: ["portfolio"],
      },
    },
  });
  const dataPortfolio = res?.ITEM?.[0];
  const dataProjects = await getData({
    api:
      endpoints.project.root +
      `?user_slug=${SLUG_USER}&ar_id=${dataPortfolio?.PROJECT_LIST?.listProjectId?.value?.join(
        ","
      )}`,
  });

  const data = {
    heroBanner: {
      label: "Hero Banner",
      type: "section",
      hidden: [],
      value: {
        nickName: {
          value: "P.Chuong",
          type: "text",
          hidden: [],
          color: "#fff",
          label: "Nick name",
        },
        contact: {
          label: "Contact",
          type: "text",
          hidden: [],
          value: "Contact",
        },
        menu: {
          label: "Menu",
          type: "array",
          hidden: [],
          value: [
            {
              value: "Overview",
              type: "text",
              hidden: [],
              color: "#fff",
            },
            {
              value: "About me",
              type: "text",
              hidden: [],
              color: "#fff",
            },
            {
              value: "Work",
              type: "text",
              hidden: [],
              color: "#fff",
            },
          ],
        },
        fullName: {
          value: "PHẠM VĂN CHƯƠNG",
          type: "text",
          hidden: [],
          label: "Full name",
        },
        job: {
          value: "FRONT-END DEVELOPER",
          type: "text",
          hidden: [],
          label: "Position",
        },
        seeMyWork: {
          label: "Button",
          type: "button",
          hidden: [],
          value: {
            title: {
              label: "Title",
              type: "text",
              hidden: [],
              color: "#fff",
              value: "See my work",
            },
            icon: {
              label: "Icon",
              type: "image",
              hidden: [],
              value: Assets.arrowTopRightIcon.src,
            },
          },
        },
      },
    },
    myProject: {
      label: "My Project",
      type: "section",
      hidden: [],
      value: {
        longTerm: {
          value:
            "I strive for excellence and pay attention to the smallest details. Each project should reflect its individuality, and border on aesthetics and functionality",
          type: "text",
          hidden: [],
          color: "#fff",
          label: "Long term",
        },
        headingSection: {
          label: "Heading Section",
          type: "text",
          hidden: [],
          value: "SELECTED WORK",
        },
        tag: {
          label: "Tag",
          type: "button",
          hidden: [],
          value: {
            title: {
              label: "Title",
              type: "text",
              hidden: [],
              color: "#fff",
              value: "MY PROJECT",
            },
            icon: {
              label: "Icon",
              type: "image",
              hidden: [],
              value: Assets.asteriskIcon.src,
            },
          },
        },
        viewAll: {
          label: "Button",
          type: "button",
          hidden: [],
          value: {
            title: {
              label: "Title",
              type: "text",
              hidden: [],
              color: "#fff",
              value: "View all",
            },
            icon: {
              label: "Icon",
              type: "image",
              hidden: [],
              value: Assets.arrowTopRightIcon.src,
            },
          },
        },
      },
    },
    aboutMe: {
      label: "About Me",
      type: "section",
      hidden: [],
      value: {
        tag: {
          label: "Tag",
          type: "button",
          hidden: [],
          value: {
            title: {
              label: "Title",
              type: "text",
              hidden: [],
              color: "#fff",
              value: "ABOUT ME",
            },
            icon: {
              label: "Icon",
              type: "image",
              hidden: [],
              value: Assets.asteriskIcon.src,
            },
          },
        },
        avatar: {
          value: {
            path: aboutMe.avatar,
          },
          type: "image",
          hidden: [],
          label: "Avatar",
        },
        title: {
          value:
            "With a passion for technology, I have 3 years experience in developing web and mobile applications, using such as JavaScript, Python, and Java.",
          type: "text",
          hidden: [],
          label: "Title",
        },
        description: {
          value:
            "I have participated in many large-scale projects, from architectural design to deployment and maintenance. With good leadership and teamwork skills, I have guided and trained new team members. I am always looking for opportunities to improve the development process and increase work efficiency. In addition, I also love exploring new technologies and applying modern development methods such as Agile and DevOps. ",
          type: "text",
          hidden: [],
          color: "#fff",
          label: "Description",
        },
        description2: {
          value:
            "I have participated in many large-scale projects, from architectural design to deployment and maintenance. With good leadership and teamwork skills, I have guided and trained new team members. I am always looking for opportunities to improve the development process and increase work efficiency. In addition, I also love exploring new technologies and applying modern development methods such as Agile and DevOps. ",
          type: "text",
          hidden: [],
          color: "#fff",
          label: "Description",
        },
      },
    },
    expertise: {
      label: "Expertise",
      type: "section",
      hidden: [],
      value: {
        tag: {
          label: "Tag",
          type: "button",
          hidden: [],
          value: {
            title: {
              label: "Title",
              type: "text",
              hidden: [],
              color: "#fff",
              value: "SKILLS",
            },
            icon: {
              label: "Icon",
              type: "image",
              hidden: [],
              value: Assets.asteriskIcon.src,
            },
          },
        },
        countClient: {
          label: "Count Client",
          type: "text",
          hidden: [],
          value: "15",
        },
        titleClient: {
          label: "Title Client",
          type: "text",
          hidden: [],
          value: "Happy Clients",
        },
        countProject: {
          label: "Count Project",
          type: "text",
          hidden: [],
          value: "10",
        },
        titleProject: {
          label: "Title Project",
          type: "text",
          hidden: [],
          value: "Projects this year",
        },
        skills: {
          value: [
            {
              platform: {
                value: "Framework",
                type: "text",
                hidden: [],
                color: "#000",
                label: "Platform",
              },
              technologies: {
                value: [
                  {
                    value: "Libraries",
                    type: "text",
                    hidden: [],
                    color: "#000",
                    label: "Technology",
                  },
                  {
                    value: "Frameworks",
                    type: "text",
                    hidden: [],
                    color: "#000",
                    label: "Technology",
                  },
                  {
                    value: "HTML",
                    type: "text",
                    hidden: [],
                    color: "#000",
                    label: "Technology",
                  },
                  {
                    value: "CSS",
                    type: "text",
                    hidden: [],
                    color: "#000",
                    label: "Technology",
                  },
                  {
                    value: "JavaScript",
                    type: "text",
                    hidden: [],
                    color: "#000",
                    label: "Technology",
                  },
                  {
                    value: "Django",
                    type: "text",
                    hidden: [],
                    color: "#000",
                    label: "Technology",
                  },
                ],
                type: "array",
                hidden: [],
                color: "#000",
                label: "Technologies",
              },
              thumbnail: {
                value: skills?.[0]?.imageUrl,
                type: "image",
                hidden: [],
                label: "Thumbnail",
              },
            },
            {
              platform: {
                value: "APP DEVELOPMENT",
                type: "text",
                hidden: [],
                color: "#000",
                label: "Platform",
              },
              technologies: {
                value: [
                  {
                    value: "Libraries",
                    type: "text",
                    hidden: [],
                    color: "#000",
                  },
                  {
                    value: "Frameworks",
                    type: "text",
                    hidden: [],
                    color: "#000",
                  },
                  {
                    value: "HTML",
                    type: "text",
                    hidden: [],
                    color: "#000",
                  },
                  {
                    value: "CSS",
                    type: "text",
                    hidden: [],
                    color: "#000",
                  },
                  {
                    value: "JavaScript",
                    type: "text",
                    hidden: [],
                    color: "#000",
                  },
                  {
                    value: "Django",
                    type: "text",
                    hidden: [],
                    color: "#000",
                  },
                ],
                type: "array",
                hidden: [],
                color: "#000",
                label: "Technologies",
              },
              thumbnail: {
                value: skills?.[1]?.imageUrl,
                type: "image",
                hidden: [],
                label: "Thumbnail",
              },
            },
            {
              platform: {
                value: "TECHNOLOGY CONSULTING",
                type: "text",
                hidden: [],
                color: "#000",
                label: "Platform",
              },
              technologies: {
                value: [
                  {
                    value: "Libraries",
                    type: "text",
                    hidden: [],
                    color: "#000",
                  },
                  {
                    value: "Frameworks",
                    type: "text",
                    hidden: [],
                    color: "#000",
                  },
                  {
                    value: "HTML",
                    type: "text",
                    hidden: [],
                    color: "#000",
                  },
                  {
                    value: "CSS",
                    type: "text",
                    hidden: [],
                    color: "#000",
                  },
                  {
                    value: "JavaScript",
                    type: "text",
                    hidden: [],
                    color: "#000",
                  },
                  {
                    value: "Django",
                    type: "text",
                    hidden: [],
                    color: "#000",
                  },
                ],
                type: "array",
                hidden: [],
                color: "#000",
                label: "Technologies",
              },
              thumbnail: {
                value: skills?.[2]?.imageUrl,
                type: "image",
                hidden: [],
                label: "Thumbnail",
              },
            },
          ],
          type: "array",
          hidden: [],
          label: "Skills",
        },
      },
    },
    footer: {
      label: "Footer",
      type: "section",
      hidden: [],
      value: {
        tag: {
          label: "Tag",
          type: "button",
          hidden: [],
          value: {
            title: {
              label: "Title",
              type: "text",
              hidden: [],
              color: "#fff",
              value: "CONTACT",
            },
            icon: {
              label: "Icon",
              type: "image",
              hidden: [],
              value: Assets.asteriskIcon.src,
            },
          },
        },
        description: {
          label: "Description",
          type: "textarea",
          hidden: [],
          color: "#fff",
          value:
            "I'm currently open for new opportunities. Let me make your project idea a reality! Don't hesitate, contact me today via",
        },
        socials: {
          type: "array",
          hidden: [],
          label: "Socials",
          value: [
            {
              platform: {
                type: "button",
                hidden: [],
                label: "Platform",
                value: {
                  title: {
                    label: "Title",
                    type: "text",
                    hidden: [],
                    color: "#fff",
                    value: "FACEBOOK",
                  },
                  icon: {
                    label: "Icon",
                    type: "image",
                    hidden: [],
                    value: Assets.facebookIcon.src,
                  },
                },
              },
              link: {
                label: "Link",
                type: "text",
                hidden: [],
                color: "#fff",
                value: "https://www.facebook.com",
              },
            },
            {
              platform: {
                type: "button",
                hidden: [],
                label: "Platform",
                value: {
                  title: {
                    label: "Title",
                    type: "text",
                    hidden: [],
                    color: "#fff",
                    value: "GITHUB",
                  },
                  icon: {
                    label: "Icon",
                    type: "image",
                    hidden: [],
                    value: Assets.githubIcon.src,
                  },
                },
              },
              link: {
                label: "Link",
                type: "text",
                hidden: [],
                color: "#fff",
                value: "https://www.github.com",
              },
            },
            {
              platform: {
                type: "button",
                hidden: [],
                label: "Platform",
                value: {
                  title: {
                    label: "Title",
                    type: "text",
                    hidden: [],
                    color: "#fff",
                    value: "LINKEDIN",
                  },
                  icon: {
                    label: "Icon",
                    type: "image",
                    hidden: [],
                    value: Assets.linkedInIcon.src,
                  },
                },
              },
              link: {
                label: "Link",
                type: "text",
                hidden: [],
                color: "#fff",
                value: "https://www.linkedin.com",
              },
            },
          ],
        },
        email: {
          label: "Email",
          type: "button",
          hidden: [],
          value: {
            title: {
              label: "Title",
              type: "text",
              hidden: [],
              color: "#fff",
              value: "yourmail@gmail.com",
            },
            icon: {
              label: "Icon",
              type: "image",
              hidden: [],
              value: Assets.arrowUpRightIcon.src,
            },
          },
        },
      },
    },
    listProject: {
      label: "Projects",
      type: "section",
      hidden: [],
      value: {
        projects: {
          type: "post-object",
          hidden: [],
          label: "Projects",
          value: [],
        },
      },
    },
  };
  return (
    <IndexHome
      data={{
        ...dataPortfolio?.HOME_PAGE,
        ...dataPortfolio?.ABOUT_ME,
        ...dataPortfolio?.PROJECT_LIST,
      }}
      dataProjects={dataProjects}
      // data={data}
      dataInit={dataPortfolio}
    />
  );
}
