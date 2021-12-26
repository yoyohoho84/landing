import {
  DoorIcon,
  SettingIcon,
  LikeIcon,
  StatsIcon,
  RocketIcon,
  LoveIcon,
  DoneIcon,
  SettingLightIcon,
} from "../icons";
import { sharing } from "../sharing-method";
import { APP_IMG_SHARING_STORIES, APP_ID } from "../constants";

export const dataTemplatePages = [
  {
    name: "/",
    icon: null,
    header: "Онлайн-конкурс красоты",
    title: `проголосуйте за своих близких в онлайн-конкурсе красоты, 
      не дайте им проиграть, после дачи голоса, Вас ждет небольшой денежных 
      приз. Для того, чтобы дать свой голос, нажмите "Проголосовать". До конца 
      онлайн конкурса осталось считанное время.`,
    description: "",
    buttonName: "Проголосовать",
    next: "setting",
  },
  // {
  //   name: "setting",
  //   icon: <DoneIcon />,
  //   header: "Для начала Анализа нажмите на кнопку начать",
  //   title: "",
  //   description: "",
  //   buttonName: "Начать",
  //   next: "like",
  // },
];
