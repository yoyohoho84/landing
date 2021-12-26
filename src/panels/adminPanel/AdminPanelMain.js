import React, { useState, useEffect, useReducer } from "react";
import { navigate } from "@reach/router";
import { Tabs, Input, Button, Radio } from "antd";
const { TabPane } = Tabs;

import { Icon20HomeOutline } from "@vkontakte/icons";
import { NAME_PROJECT } from "../../constants";

import "./AdminPanelMain.scss";

const AdminPanelMain = ({
  onChangeAction,
  editLinkGroup,
  getPlatform,
  getButtonStats,
  getGroupId,
  onChangeRadio,
  radioValue,
}) => {
  // const arrStats = [];

  // for (let key in getButtonStats) {
  //   if (!key.includes("SquidGameAPP")) {
  //     arrStats.push({ [key]: getButtonStats[key] });
  //   }
  // }

  return (
    <Tabs
      defaultActiveKey="pages"
      centered
      tabPosition="top"
      style={{ marginTop: getPlatform !== "web" ? "50px" : "0" }}
    >
      <TabPane
        tab={
          <div
            className="admin-panel-container__icon"
            onClick={() => navigate("landing")}
            // onClick={() => navigate("/")}
          >
            {" "}
            <Icon20HomeOutline />
          </div>
        }
        key="home"
      ></TabPane>
      <TabPane tab="Страницы" key="pages">
        <div className="admin-panel-container" key="pages_1">
          <div className="title">Создать копию</div>
          <Input
            placeholder="Укажите ID приложения"
            onChange={(e) => onChangeAction(e, "app-id")}
            type="text"
          />
          <Input
            placeholder="Укажите ссылку для кнопки"
            onChange={(e) => onChangeAction(e, "btn-url")}
            type="text"
          />

          <div>
            <Radio.Group onChange={onChangeRadio} value={radioValue}>
              <Radio value={1}>Включить</Radio>
              <Radio value={0}>Выключить</Radio>
            </Radio.Group>
          </div>

          <Button
            type="primary"
            onClick={() => {
              // editLinkGroup("setting")
            }}
          >
            Создать
          </Button>
        </div>

        <div className="all-apps">
          {/* {allApps.map((item, index) => {
            return <div className="app-item" key={index}>
              <div className="app-item">ID Приложения: {item.appId}</div>
              <div className="app-item">ID Приложения: {item.appId}</div>
            </div>;
          })} */}
        </div>
      </TabPane>
    </Tabs>
  );
};

export { AdminPanelMain };
