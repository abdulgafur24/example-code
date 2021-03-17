import React, { useContext, useState } from "react";
import cn from "utils/cn";
import { Layout } from "antd";
import { Sidebar } from "components/Molecules";
import { ProfileContext } from "context/ProfileContext";
import { Flex, Icon, Logo } from "components/Atoms";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isMobile } from "constants/breakpoints";
import { MobileCurrency } from "components/Molecules/LayoutHeader";
import "./style.scss";

interface ApplicationLayoutProps {
  children: React.ReactNode;
}

export default function ApplicationLayout({
  children,
}: ApplicationLayoutProps) {
  const cl = cn("ApplicationLayout");
  const { profile } = useContext(ProfileContext);

  const [sidebarOpened, setSidebarOpened] = useState(isMobile ? true : false);

  return (
    <Layout style={{ minHeight: "100%" }}>
      <Sidebar
        mobileSidebarOpened={sidebarOpened}
        mobileSetSidebarOpened={setSidebarOpened}
        withPublication={profile.type !== "traider"}
      />
      <Layout className={cl()}>
        <div
          onClick={() => setSidebarOpened(false)}
          className={cl("mobile-sidebar-background", { show: sidebarOpened })}
        />
        {isMobile && <MobileCurrency />}
        <Flex className={cl("mobile-header")} justifyContent="space-between">
          <Button
            onClick={() => setSidebarOpened(true)}
            className={cl("mobile-header-button")}
            variant="link"
          >
            <Icon name="menu" />
          </Button>
          <Flex alignItems="center">
            <Logo width={125} height={32} />
          </Flex>
          <Button className={cl("mobile-header-button")} variant="link">
            <Link to="/profile">
              <Icon name="user" />
            </Link>
          </Button>
        </Flex>

        {children}
      </Layout>
    </Layout>
  );
}
