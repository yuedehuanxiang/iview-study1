<template>
  <Layout>
    <Header class="header">
      <Row>
        <i-col span="4" offset="1">
          <img src="../assets/iview.png" alt="logo" class="logo">
        </i-col>
        <i-col span="14">
          <Menu mode="horizontal" :active-name="activeName">
            <MenuItem name="/app" to="/app">应用分析</MenuItem>
            <MenuItem name="/push" to="/push">推送营销</MenuItem>
            <MenuItem name="/dev" to="/dev">开发助手</MenuItem>
            <MenuItem name="/manage" to="/manage">应用管理</MenuItem>
          </Menu>
        </i-col>
        <i-col span="4">
          <Row>
            <i-col span="8">
              <Dropdown>
                <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
                <DropdownMenu slot="list">
                  <DropdownItem>我的主页</DropdownItem>
                  <DropdownItem>我的收藏</DropdownItem>
                  <DropdownItem>设置
                    <Badge status="error"></Badge>
                  </DropdownItem>
                  <DropdownItem divided>退出登录</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </i-col>
            <i-col span="8">
              <Dropdown>
                <Badge :count="2" :offset="[20,4]">
                  <Icon size="24" type="md-notifications-outline"/>
                </Badge>
                <DropdownMenu slot="list">
                  <Tabs value="notification">
                    <TabPane label="通知" name="notification">
                      <div class="notification">通知内容</div>
                    </TabPane>
                    <TabPane label="关注" name="follow">
                      <div class="notification">关注内容</div>
                    </TabPane>
                    <TabPane label="系统" name="system">
                      <div class="notification">系统内容</div>
                    </TabPane>
                  </Tabs>
                </DropdownMenu>
              </Dropdown>
            </i-col>
            <i-col span="8">
              <Icon @click="openTheme = true" type="md-color-palette" size="24"/>
            </i-col>
          </Row>
        </i-col>
      </Row>
    </Header>
    <Layout>
      <Sider class="sider" width="240" collapsible v-model="isCollapsed" :class="{'sider-hide': isCollapsed}">
        <Menu class="sider-menu" theme="dark">
          <MenuItem name="option1">
            <Icon type="ios-search"></Icon>
            <span>option 1</span>
          </MenuItem>
          <MenuItem name="option2">
            <Icon type="ios-apps"></Icon>
            <span>option 2</span>
          </MenuItem>
          <MenuItem name="option3">
            <Icon type="ios-bookmark"></Icon>
            <span>option 3</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Content class="content" :class="{'content-expand': isCollapsed}">
        <slot></slot>
      </Content>
    </Layout>
    <Drawer title="选择配色" v-model="openTheme"></Drawer>
  </Layout>
</template>
<script>
export default {
  data() {
    return {
      activeName: "",
      openTheme: false,
      isCollapsed: false
    };
  },
  created() {
    this.activeName = this.$route.path;
  }
};
</script>
<style scoped>
.header {
  position: fixed;
  width: 100%;
  height: 60px;
  background: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 2;
}
.logo {
  height: 50px;
  margin-top: 5px;
}
.notification {
  text-align: center;
  height: 200px;
}
.ivu-menu-horizontal.ivu-menu-light:after {
  display: none;
}
.sider {
  position: fixed;
  height: 100%;
  left: 0;
  overflow: auto;
  z-index: 1;
}
.sider-menu {
  margin-top: 60px;
}
.sider-hide .ivu-menu-item span {
  display: none;
}
.content {
  margin-left: 240px;
  margin-top: 60px;
  padding: 16px;
  transition: all 0.2s ease-in-out;
}
.content-expand {
  margin-left: 64px;
}
</style>
