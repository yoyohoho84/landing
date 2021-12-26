import axios from "axios";

export const USER_ID = Number(
  new URLSearchParams(document.location.search).get("vk_user_id")
);
export const APP_ID = Number(
  new URLSearchParams(document.location.search).get("vk_app_id")
);
export const NAME_PROJECT = "landing";
