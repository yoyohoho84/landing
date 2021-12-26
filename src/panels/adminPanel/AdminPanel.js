import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { AdminPanelMain } from "/";
import { NAME_PROJECT, NAME_PROJECT_LOWER_CASE } from "../../constants";

const AdminPanel = ({
  openAlert,
  snackbar,
  getButtonStats,
  getPlatform,
  getGroupId,
}) => {
  const [appID, setAppID] = useState("");
  const [btnUrl, setBtnUrl] = useState("");
  const [radioValue, setRadioValue] = useState(0);

  const typeLink = {
    "app-id": appID,
    "btn-url": btnUrl,
  };

  const typeLinkKey = {
    "app-id": `links${NAME_PROJECT}_.appID`,
    "app-id": `links${NAME_PROJECT}_.appID`,
  };

  function editLinkGroup(type) {
    axios
      .post("https://ods-studio.ru/app-statistics/edit", {
        key: typeLinkKey[type],
        value: typeLink[type],
      })
      .then(function (response) {
        if (response.data === "ok") {
          openAlert(
            type === "app-id"
              ? "Вы успешно изменили ссылку на приложение"
              : "Вы успешно изменили ссылку на группу"
          );
        } else {
          openAlert("Вы указали невалидную ссылку", "red");
        }
      })
      .catch(function (error) {});
  }

  function onChangeAction(e, type) {
    const value = e.target.value.trim();

    switch (type) {
      case "app-id":
        setAppID(value);
        break;
      case "btn-url":
        setBtnUrl(value);
        break;
      default:
        break;
    }
  }

  const onChangeRadio = (e) => {
    console.log("radio checked", e.target.value);
    setRadioValue(e.target.value);
  };

  return (
    <div>
      <AdminPanelMain
        onChangeAction={onChangeAction}
        editLinkGroup={editLinkGroup}
        getButtonStats={getButtonStats}
        getPlatform={getPlatform}
        getGroupId={getGroupId}
        radioValue={radioValue}
        onChangeRadio={onChangeRadio}
      />
      {snackbar}
    </div>
  );
};

export { AdminPanel };
