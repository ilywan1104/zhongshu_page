/*
 * @Description: 
 * @version: 1.0.0
 * @Author: Tony.Z
 * @Date: 2019-10-11 14:38:26
 * @LastEditors: Tony.Z
 * @LastEditTime: 2019-10-14 00:30:39
 */
import React from 'react';
import header_logo from '../../assets/logo.svg';
import banner_logo from '../../assets/logo.png';
import wx_qrcode from '../../assets/wx_qrcode.jpg';

const logo = window.location.origin + banner_logo;

export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper k1jkmvzb0r8-editor_css' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    children: header_logo,//'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'Banner0_0',
        to: 'Banner0_0',
        children: '首页',
        className: 'menu-item',
      },
      {
        name: 'Content3_0',
        to: 'Content3_0',
        children: '产品与服务',
        className: 'menu-item',
      },
      {
        name: 'Feature6_1',
        to: 'Feature6_1',
        children: '我们的优势',
        className: 'menu-item',
      },
      {
        name: 'Content5_0',
        to: 'Content5_0',
        children: '客户案例',
        className: 'menu-item',
      },
      {
        name: 'Feature8_0',
        to: 'Feature8_0',
        children: '服务流程',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
  menuLink: { children: [] },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0 k1jhmtlcwce-editor_css' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: (<img src={`${logo}`} width="100%"/>),//'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
  },
  content: {
    className: 'banner0-content',
    children: (
      <div>
        <p>专注互联网产品定制开发服务</p>
        <p>国内专业的互联网技术解决方案提供商</p>
      </div>
    ),
  },
  button: {
    className: 'banner0-button',
    children: (<img src={`${wx_qrcode}`} width="140" />),//'联系我们',
    // type: 'dashed',
    // href: '',
    // target: '_blank',
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (<p>产品与服务</p>),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (<p>
              我们专注于互联网行业，深入场景进行产品设计与创新，为您创造新价值！
            </p>),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (<p>移动APP</p>),
          },
          content: {
            className: 'content3-content',
            children: (<p>iOS+Android，移动互联网最流行趋势</p>),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (<p>小程序/公众号</p>),
          },
          content: {
            className: 'content3-content',
            children: (<p>轻松拥有自己的微信小程序</p>),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (<p>UI/UE设计</p>),
          },
          content: {
            className: 'content3-content',
            children: (<p>良好的视觉引导，提高品牌辨识</p>),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (<p>网站开发</p>),
          },
          content: {
            className: 'content3-content',
            children: (<p>网站系统，如官网建设或商城研发</p>),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (<p>H5活动页</p>),
          },
          content: {
            className: 'content3-content',
            children: (<p>用于轻应用开发，宣传推广内容开发</p>),
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (<p>应用系统</p>),
          },
          content: {
            className: 'content3-content',
            children: (<p>Web后台系统开发，更好的管理业务</p>),
          },
        },
      },
    ],
  },
};
export const Feature61DataSource = {
  wrapper: {
    className: 'home-page-wrapper feature6-wrapper k1jkaiipnvo-editor_css',
  },
  OverPack: { className: 'home-page feature6', playScale: 0.3 },
  Carousel: {
    className: 'feature6-content k1jjdyokldi-editor_css',
    dots: false,
    wrapper: { className: 'feature6-content-wrapper' },
    titleWrapper: {
      className: 'feature6-title-wrapper',
      barWrapper: {
        className: 'feature6-title-bar-wrapper',
        children: { className: 'feature6-title-bar k1jkbudi4q-editor_css' },
      },
      title: { className: 'feature6-title' },
    },
    children: [
      {
        title: {
          className: 'feature6-title-text k1jk7pwns47-editor_css',
          children: (<p>我们的优势</p>),
        },
        className: 'feature6-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child0',
            number: {
              className: 'feature6-number k1jkc1g12vh-editor_css',
              unit: {
                className: 'feature6-unit k1jj95fun9j-editor_css',
                children: (<p>+ 年</p>),
              },
              toText: true,
              children: '10',
            },
            children: {
              className: 'feature6-text k1jkce8ipb-editor_css',
              children: (<p>技术开发经验</p>),
            },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child1',
            number: {
              className: 'feature6-number k1jkdwfa89f-editor_css',
              unit: {
                className: 'feature6-unit k1jj5y29j4-editor_css',
                children: (<p>K</p>),
              },
              toText: true,
              children: '1.17',
            },
            children: {
              className: 'feature6-text k1jkdx7xfa8-editor_css',
              children: (<p>服务客户</p>),
            },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child2',
            number: {
              className: 'feature6-number k1jkei9pg8q-editor_css',
              unit: {
                className: 'feature6-unit k1jjdn4jsa7-editor_css',
                children: (<p>+</p>),
              },
              toText: true,
              children: '100',
            },
            children: {
              className: 'feature6-text k1jkeu66r0b-editor_css',
              children: (<p>互联网项目</p>),
            },
          },
        ],
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '客户案例', className: 'title-h1' }],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
    ],
  },
};
export const Feature80DataSource = {
  wrapper: { className: 'home-page-wrapper feature8-wrapper' },
  page: { className: 'home-page feature8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'feature8-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'feature8-title-h1 k1jih2vb2h8-editor_css',
        children: (<p>服务流程</p>),
      },
    ],
  },
  childWrapper: {
    className: 'feature8-button-wrapper',
    children: [
      {
        name: 'button~k1m8ei392k',
        className: 'k1m8emuy5p-editor_css',
        children: { 
          children:(<img src={`${wx_qrcode}`} width="140" />),
          href: '#', 
          type: 'default' 
        },
      },
    ],
  },
  Carousel: {
    dots: false,
    className: 'feature8-carousel',
    wrapper: { className: 'feature8-block-wrapper' },
    children: {
      className: 'feature8-block',
      titleWrapper: {
        className: 'feature8-carousel-title-wrapper',
        title: { className: 'feature8-carousel-title' },
      },
      children: [
        {
          name: 'block0',
          className: 'feature8-block-row',
          gutter: 120,
          title: {
            className: 'feature8-carousel-title-block',
            children: '平台自主训练流程',
          },
          children: [
            {
              className: 'feature8-block-col k1ji0k28frb-editor_css',
              md: 4,
              xs: 24,
              name: 'child0',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child k1jhq7n8e9j-editor_css',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <div>
                        <p>需求沟通</p>
                      </div>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content k1jhqv2k3tc-editor_css',
                    children: (
                      <div>
                        <p>倾听客户需求</p>
                        <p>
                          <span>功能分析，竞品调研</span>
                        </p>
                      </div>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 4,
              xs: 24,
              name: 'child1',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child k1jhsloar88-editor_css',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <div>
                        <p>交互设计</p>
                      </div>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content k1jhtam2ym-editor_css',
                    children: (
                      <div>
                        <p>原型UE设计</p>
                        <p>
                          <span>规范流程，精心布局</span>
                        </p>
                      </div>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 4,
              xs: 24,
              name: 'child2',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child k1ji5sy7cvj-editor_css',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <div>
                        <p>界面设计</p>
                      </div>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content k1jhv4lboj-editor_css',
                    children: (
                      <div>
                        <p>优质的UI设计风格</p>
                        <p>提升用户视觉体验</p>
                      </div>
                    ),
                  },
                ],
              },
            },
            {
              className: 'k1ji1jx97m-editor_css feature8-block-col',
              md: 4,
              xs: 24,
              name: 'child3',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child k1ji1hw3zia-editor_css',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <div>
                        <p>技术开发</p>
                      </div>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content k1jhwfu9ggb-editor_css',
                    children: (
                      <div>
                        <p>资深攻城狮团队</p>
                        <p>注重安全，稳定高效</p>
                      </div>
                    ),
                  },
                ],
              },
            },
            {
              className: 'k1ji1jx97m-editor_css feature8-block-col',
              md: 4,
              xs: 24,
              name: 'child~k1jibtjkz17',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child k1ji1hw3zia-editor_css',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <div>
                        <p>测试上线</p>
                      </div>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content k1jhwfu9ggb-editor_css',
                    children: (
                      <div>
                        <p>全方位测试</p>
                        <p>严格把关产品质量</p>
                      </div>
                    ),
                  },
                ],
              },
            },
            {
              className: 'k1ji1jx97m-editor_css feature8-block-col',
              md: 4,
              xs: 24,
              name: 'child~k1jibv8wif7',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child k1ji1hw3zia-editor_css',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <div>
                        <p>运维迭代</p>
                      </div>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content k1jhwfu9ggb-editor_css',
                    children: (
                      <div>
                        <p>7×24小时维护</p>
                        <p>结合运营，版本迭代</p>
                      </div>
                    ),
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
};
export const Footer20DataSource = {
  wrapper: { className: 'home-page-wrapper footer2-wrapper' },
  OverPack: { className: 'home-page footer2', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: [
      {
        name: 'copyright',
        children: 'Copyright © 深圳市众数科技有限公司',
        className: 'copyright-text',
      },
    ],
  },
  links: {
    className: 'links',
    children: [],
  },
};
