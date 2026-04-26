import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

function Card({ className = "", children, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

function CardContent({ className = "", children, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

function Button({ variant = "default", className = "", children, ...props }) {
  const baseClass =
    "inline-flex items-center justify-center font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const variantClass =
    variant === "outline"
      ? "border border-slate-200 bg-white text-slate-900 shadow-sm hover:bg-slate-50"
      : "bg-blue-600 text-white shadow-sm hover:bg-blue-700";
  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

const navItems = [
  { id: "home", label: "首页" },
  { id: "research", label: "研究方向" },
  { id: "team", label: "团队成员" },
  { id: "publications", label: "成果展示" },
  { id: "recruitment", label: "招生信息" },
  { id: "contact", label: "联系我们" },
];

const researchItems = [
  {
    icon: "PAM",
    title: "光声显微成像（PAM）",
    text: "围绕光声显微成像、快速扫描成像和系统集成开展研究，发展高分辨率、高灵敏度的光声显微成像技术与实验平台。",
  },
  {
    icon: "PACT",
    title: "光声断层成像（PACT）",
    text: "研究光声断层成像系统、声学探测结构和图像重建方法，面向组织结构与功能信息的三维可视化检测。",
  },
  {
    icon: "DL",
    title: "深度学习图像重建",
    text: "结合深度学习、信号处理和物理模型约束，开展光声图像重建、增强、配准和定量分析方法研究。",
  },
  {
    icon: "NDT",
    title: "智能无损检测与感知",
    text: "面向精密仪器、生物医学成像和工业检测需求，探索智能无损检测理论、方法及人工智能感知技术。",
  },
];

const members = [
  { id: "chen-jiangbo", role: "课题组负责人", name: "陈江波", desc: "副教授，博士生导师，硕士生导师。" },
  { id: "chen-kexin", role: "博士研究生", name: "陈可欣", enrollYear: "2024年入学", enrollOrder: 2024, desc: "博士研究生。" },
  { id: "li-congsen", role: "博士研究生", name: "李枞森", enrollYear: "2024年入学", enrollOrder: 2024, desc: "博士研究生。" },
  { id: "li-tianyou", role: "博士研究生", name: "李天佑", enrollYear: "2025年入学", enrollOrder: 2025, desc: "博士研究生。" },
  { id: "shen-zhiye", role: "博士研究生", name: "沈志烨", enrollYear: "2026年入学", enrollOrder: 2026, desc: "博士研究生。" },
  { id: "ma-zeyu", role: "硕士研究生", name: "马泽禹", enrollYear: "2023年入学", enrollOrder: 2023, desc: "硕士研究生。" },
  { id: "lei-ying", role: "硕士研究生", name: "雷瑛", enrollYear: "2024年入学", enrollOrder: 2024, desc: "硕士研究生。" },
  { id: "yang-fan", role: "硕士研究生", name: "杨帆", enrollYear: "2024年入学", enrollOrder: 2024, desc: "硕士研究生。" },
  { id: "xu-bowei", role: "硕士研究生", name: "徐博伟", enrollYear: "2025年入学", enrollOrder: 2025, desc: "硕士研究生。" },
  { id: "cai-zhongming", role: "硕士研究生", name: "蔡仲明", enrollYear: "2025年入学", enrollOrder: 2025, desc: "硕士研究生。" },
  { id: "lu-qiaowen", role: "硕士研究生", name: "卢巧雯", enrollYear: "2025年入学", enrollOrder: 2025, desc: "硕士研究生。" },
  { id: "li-siyuan", role: "硕士研究生", name: "李思远", enrollYear: "2026年入学", enrollOrder: 2026, desc: "硕士研究生。" },
  { id: "zhou-yuwen", role: "硕士研究生", name: "周玉稳", enrollYear: "2026年入学", enrollOrder: 2026, desc: "硕士研究生。" },
  { id: "liu-minzhi", role: "硕士研究生", name: "刘敏芝", enrollYear: "2026年入学", enrollOrder: 2026, desc: "硕士研究生。" },
];

function sortByEnrollmentYear(list) {
  return [...list].sort((a, b) => (a.enrollOrder || 0) - (b.enrollOrder || 0));
}

const memberGroups = [
  { title: "课题组负责人", members: members.filter((member) => member.role === "课题组负责人") },
  { title: "博士研究生", members: sortByEnrollmentYear(members.filter((member) => member.role === "博士研究生")) },
  { title: "硕士研究生", members: sortByEnrollmentYear(members.filter((member) => member.role === "硕士研究生")) },
];

const publications = [
  "Hong Xiaobin, Tang Furong, Wang Lidai*, Chen Jiangbo*. Unsupervised deep learning enables real-registration of fast-scanning optical-resolution photoacoustic microscopy. Photoacoustics, 2024: 100632.",
  "Jiangbo Chen, Yachao Zhang, Linyun He, Yizhi Liang, Lidai Wang*. Wide-field polygon-scanning microscopy of oxygen saturation at 1-MHz A-line rate. Photoacoustics, 2020, 20: 100195.",
  "Jiangbo Chen, Yachao Zhang, Xianzhi Li, Jingyi Zhu, Dengfeng Li, Shengliang Li, Chun-Sing Lee*. Confocal visible/NIR photoacoustic microscopy of tumors with structural, functional, and nanoprobe contrast. Research, 2020, 12: 1875–1880.",
  "Jiangbo Chen, Yachao Zhang, Jingyi Zhu, Lidai Wang*. Freehand scanning photoacoustic microscopy: simultaneous localization and mapping. Photoacoustics, 2022: 100411.",
  "Jiangbo Chen, Yachao Zhang, Songnan Bai, Jingyi Zhu, Pakpong Chirarattananon, Kai Ni, Qian Zhou. Dual-foci fast-scanning photoacoustic microscopy with 3.2-MHz A-line rate. Photoacoustics, 2021.",
  "Yachao Zhang#, Jiangbo Chen#, Jie Zhang, Jingyi Zhu, Chao Liu, Hongyan Sun, Lidai Wang*. Super-resolution functional and molecular photoacoustic microscopy. Advanced Science, 2023, 10: 2302486.",
];

const advisorProfile = {
  id: "chen-jiangbo",
  name: "陈江波",
  title: "副教授 / 博士生导师 / 硕士生导师",
  affiliation: "华南理工大学机械与汽车工程学院",
  office: "华南理工大学五山校区10号楼325",
  email: "cjiangbo@scut.edu.cn",
  intro:
    "陈江波老师于2021年10月博士毕业于香港城市大学，2021年10月至2023年03月在香港理工大学和香港城市大学从事研究工作，现任职于华南理工大学机械与汽车工程学院。主要研究方向包括光声显微成像技术及设备、深度学习图像处理理论与方法、人工智能感知技术等。",
  education: [
    "2018.10–2021.10 香港城市大学 机械与生物医学工程 哲学博士",
    "2013.09–2016.01 哈尔滨工业大学 机械电子工程 学术硕士",
    "2009.09–2013.07 东北林业大学 机械设计制造及其自动化 本科",
  ],
  experience: [
    "2023.04–至今 华南理工大学 机械电子工程 副教授/博导/硕导",
    "2023.02–2023.03 香港城市大学/香港城市大学深圳研究院 研究员",
    "2021.10–2022.12 香港理工大学 BME 博士后",
    "2016.04–2018.09 香港理工大学 ISE 超精密加工技术国家重点实验室 研究助理",
    "2016.01–2016.03 清华大学 航天航空学院 研究助理",
  ],
  research: researchItems.map((item) => item.title),
  publications,
};

const projects = [
  "国家自然科学基金面上项目 1 项，负责人",
  "广东省重点领域研发计划项目 1 项，校方负责人",
  "国家自然科学基金青年基金项目 1 项，负责人",
  "广东省自然科学基金面上项目 1 项，负责人",
  "国家重点研发计划项目 1 项，子课题负责人",
  "广东省区域联合基金青年项目 1 项，负责人",
  "广东省重点领域研发计划项目 1 项，主要参与人",
];

const patents = [
  "HANDHELD DEVICE FOR PHOTOACOUSTIC MICROSCOPY AND RELATED PHOTOACOUSTIC MICROSCOPY SYSTEM（美国发明专利，已授权）",
  "OPTICAL FIBER BASED OPTICAL RADIATION MODULATION DEVICE（美国发明专利）",
  "申请中国发明专利 7 项，已授权 4 项，其中第一发明人专利 6 项。",
];

const academicRoles = [
  "广东省机械工程学会无损检测分会秘书长",
  "广东省机械工程学会理事",
  "广东省机械工程学会无损检测分会理事",
  "广州市机电工程学会理事",
  "《光学精密工程》编委",
  "Nature Communications、Photoacoustics、Biomedical Optics Express 等 SCI 期刊审稿人",
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SimpleIcon({ label, className = "" }) {
  const iconClass = "h-6 w-6";

  const iconMap = {
    Office: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
      >
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4" />
        <path d="M9 10h.01" />
        <path d="M15 10h.01" />
        <path d="M9 13h.01" />
        <path d="M15 13h.01" />
      </svg>
    ),
    Lab: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
      >
        <path d="M10 2v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3L14 8V2" />
        <path d="M8 2h8" />
        <path d="M7 14h10" />
      </svg>
    ),
    Mail: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClass}
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  };

  return (
    <span
      className={cx(
        "inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-xs font-bold tracking-tight text-white shadow-sm",
        className
      )}
      aria-hidden="true"
    >
      {iconMap[label] ?? label}
    </span>
  );
}

function MenuIcon({ open }) {
  return (
    <span className="relative inline-flex h-6 w-6 items-center justify-center" aria-hidden="true">
      <span className={cx("absolute h-0.5 w-5 rounded-full bg-slate-800 transition", open ? "rotate-45" : "-translate-y-1.5")} />
      <span className={cx("absolute h-0.5 w-5 rounded-full bg-slate-800 transition", open ? "opacity-0" : "opacity-100")} />
      <span className={cx("absolute h-0.5 w-5 rounded-full bg-slate-800 transition", open ? "-rotate-45" : "translate-y-1.5")} />
    </span>
  );
}

function ArrowRight() {
  return <span className="ml-2 text-lg leading-none" aria-hidden="true">→</span>;
}

function SectionTitle({ eyebrow, title, text, dark = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className={cx("mb-3 text-sm font-semibold uppercase tracking-[0.28em]", dark ? "text-blue-200" : "text-blue-600")}>{eyebrow}</p>
      <h2 className={cx("text-3xl font-bold tracking-tight md:text-4xl", dark ? "text-white" : "text-slate-950")}>{title}</h2>
      {text && <p className={cx("mt-4 text-base leading-7", dark ? "text-slate-300" : "text-slate-600")}>{text}</p>}
    </div>
  );
}

const studentProfiles = {
  "chen-kexin": {
    office: "华南理工大学五山校区焊接楼",
    email: "",
    intro: "陈可欣，2024年入学，博士研究生，现为华南理工大学机械与汽车工程学院光声智能成像实验室成员。",
    education: [
      "2017—2021 江苏大学 机械工程学院 机械设计制造及其自动化 学士",
      "2021—2024 北京工业大学 机械与能源工程学院 机械工程 硕士",
      "2024—至今 华南理工大学 机械与汽车工程学院 机械工程 博士",
    ],
    experience: ["科研经历待补充。"],
    research: ["研究方向待补充。"],
    publications: ["代表性成果待补充。"],
  },
  "li-congsen": {
    office: "华南理工大学五山校区焊接楼",
    email: "202410180250@mail.scut.edu.cn",
    intro: "李枞森，2024年入学，博士研究生，现为华南理工大学机械与汽车工程学院光声智能成像实验室成员。",
    education: [
      "2016—2024 汕头大学 医学院 临床医学学士、外科学硕士",
      "2024—至今 华南理工大学 机械与汽车工程学院 机械工程 在读博士",
    ],
    experience: ["科研经历待补充。"],
    research: ["生物医学工程", "医用光学成像与精密仪器研究"],
    publications: [
      "Congsen Li, Kexin Chen, HaiPing Cai, Xiaobin Hong, Jiangbo Chen, Inducing and monitoring photothrombotic stroke in anesthetic neuroprotection-free mice using functional photoacoustic microscopy, Neurophoton. 13(2), 025007 (2026), doi: 10.1117/1.NPh.13.2.025007.",
      "陈江波, 李枞森, 洪晓斌. 一种快速线性共焦扫描光声显微成像系统及其成像方法[P]. 已授权：CN119470280B, 授权时间：2025年10月3日.",
    ],
  },
  "yang-fan": {
    office: "华南理工大学五山校区焊接楼",
    email: "frankyang5525@gmail.com",
    intro: "杨帆，2024年入学，硕士研究生，现为华南理工大学机械与汽车工程学院光声智能成像实验室成员。",
    education: [
      "2020—2024 南京林业大学 机械电子工程学院 机械电子工程 学士",
      "2024—至今 华南理工大学 机械与汽车工程学院 机械工程 硕士",
    ],
    experience: ["科研经历待补充。"],
    research: ["光声显微成像系统", "超声换能器"],
    publications: ["代表性成果待补充。"],
  },
  "ma-zeyu": {
    office: "华南理工大学五山校区焊接楼",
    email: "969447949@qq.com",
    intro: "马泽禹，2023年入学，硕士研究生，现为华南理工大学光声智能成像实验室成员。",
    education: [
      "2018—2022 华南理工大学 材料科学与工程学院 学士",
      "2023—至今 华南理工大学 物理与光电学院 硕士",
    ],
    experience: ["科研经历待补充。"],
    research: ["PACT图像重建及后处理"],
    publications: ["代表性成果待补充。"],
  },
  "lei-ying": {
    office: "华南理工大学五山校区焊接楼",
    email: "menleiying@mail.scut.edu.cn",
    intro: "雷瑛，2024年入学，硕士研究生，现为华南理工大学机械与汽车工程学院光声智能成像实验室成员。",
    education: [
      "2020—2024 南京理工大学 机械工程学院 机械设计及其自动化 学士",
      "2024—至今 华南理工大学 机械与汽车工程学院 机械工程 硕士",
    ],
    experience: ["科研经历待补充。"],
    research: ["光声计算断层成像重建", "深度学习图像算法"],
    publications: ["代表性成果待补充。"],
  },
  "xu-bowei": {
    office: "华南理工大学五山校区焊接楼",
    email: "1923484987@qq.com",
    intro: "徐博伟，2025年入学，硕士研究生，现为华南理工大学机械与汽车工程学院光声智能成像实验室成员。",
    education: [
      "2019—2023 武汉理工大学 机电工程学院 机械工程 学士",
      "2025—至今 华南理工大学 机械与汽车工程学院 机械工程 硕士",
    ],
    experience: ["科研经历待补充。"],
    research: ["光声图像重建"],
    publications: ["代表性成果待补充。"],
  },
  "cai-zhongming": {
    office: "华南理工大学五山校区焊接楼",
    email: "18694953578@163.com",
    intro: "蔡仲明，2025年入学，硕士研究生，现为华南理工大学机械与汽车工程学院光声智能成像实验室成员。",
    education: [
      "2021—2025 河海大学 机电工程学院 机械工程 学士",
      "2024—至今 华南理工大学 机械与汽车工程学院 机械工程 硕士",
    ],
    experience: ["科研经历待补充。"],
    research: ["深度学习图像算法", "光声显微镜图像重建"],
    publications: ["代表性成果待补充。"],
  },
  "lu-qiaowen": {
    office: "华南理工大学五山校区焊接楼",
    email: "854013595@qq.com",
    intro: "卢巧雯，2025年入学，硕士研究生，现为华南理工大学机械与汽车工程学院光声智能成像实验室成员。",
    education: [
      "2021—2025 华北电力大学 机械工程系 机械工程专业 学士",
      "2025—至今 华南理工大学 机械与汽车工程学院 机械工程 硕士",
    ],
    experience: ["科研经历待补充。"],
    research: ["光声成像系统硬件设计", "成像装置性能优化"],
    publications: ["代表性成果待补充。"],
  },
};

function makeStudentProfile(member) {
  const customProfile = studentProfiles[member.id] || {};

  return {
    id: member.id,
    name: member.name,
    title: member.enrollYear ? `${member.role} / ${member.enrollYear}` : member.role,
    affiliation: "华南理工大学机械与汽车工程学院 光声智能成像实验室",
    office: customProfile.office || "华南理工大学机械与汽车工程学院",
    email: customProfile.email ?? "邮箱信息待补充",
    intro:
      customProfile.intro ||
      `${member.name}，${member.enrollYear ? member.enrollYear + "，" : ""}${member.role}，现为华南理工大学机械与汽车工程学院光声智能成像实验室成员。个人简介、研究方向和成果信息待后续补充。`,
    education: customProfile.education || ["教育经历待补充。"],
    experience: customProfile.experience || ["科研经历待补充。"],
    research: customProfile.research || ["研究方向待补充。"],
    publications: customProfile.publications || ["代表性成果待补充。"],
  };
}

function getMemberProfile(memberId) {
  const member = members.find((item) => item.id === memberId) || members[0];
  if (member.id === advisorProfile.id) return advisorProfile;
  return makeStudentProfile(member);
}

function assertSiteData() {
  if (navItems.length < 6) return false;
  if (!navItems.every((item) => item.id && item.label)) return false;
  if (!researchItems.every((item) => item.title && item.text && item.icon)) return false;
  if (!members.every((member) => member.id && member.role && member.name && member.desc)) return false;
  if (!members.every((member) => getMemberProfile(member.id).name === member.name)) return false;
  if (publications.length === 0) return false;
  return true;
}

const siteDataIsValid = assertSiteData();

function MemberDetailPage({ memberId, onBack }) {
  const profile = getMemberProfile(memberId);
  const isAdvisor = profile.id === advisorProfile.id;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={onBack} className="flex items-center gap-3" aria-label="返回网站首页">
            <SimpleIcon label="PA" />
            <div className="text-left">
              <div className="text-lg font-bold tracking-tight">光声智能成像</div>
              <div className="text-xs text-slate-500">华南理工大学 · 光声智能成像实验室</div>
            </div>
          </button>
          <Button variant="outline" onClick={onBack} className="rounded-2xl">
            ← 返回团队成员
          </Button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <button onClick={onBack} className="mb-8 text-sm font-medium text-blue-600 hover:text-blue-700">
            ← 团队成员
          </button>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 text-5xl font-bold text-blue-600 shadow-sm">
                {profile.name.slice(0, 1)}
              </div>
              <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-950">{profile.name}</h1>
              <p className="mt-3 text-xl font-medium text-blue-700">{profile.title}</p>
              <div className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                <p>{profile.affiliation}</p>
                <p>办公地点：{profile.office}</p>
                {profile.email && <p>联系邮箱：{profile.email}</p>}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Profile</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">个人简介</h2>
              <p className="mt-5 text-base leading-8 text-slate-700">{profile.intro}</p>

              <div className={cx("mt-8 grid gap-5", isAdvisor ? "md:grid-cols-2" : "md:grid-cols-1")}>
                <div className="rounded-3xl bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-950">教育经历</h3>
                  <div className="mt-4 space-y-3">
                    {profile.education.map((item) => (
                      <p key={item} className="text-sm leading-6 text-slate-600">{item}</p>
                    ))}
                  </div>
                </div>
                {isAdvisor && (
                  <div className="rounded-3xl bg-slate-50 p-6">
                    <h3 className="font-bold text-slate-950">科研/工作经历</h3>
                    <div className="mt-4 space-y-3">
                      {profile.experience.map((item) => (
                        <p key={item} className="text-sm leading-6 text-slate-600">{item}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className={cx("mx-auto grid max-w-7xl gap-6", isAdvisor ? "lg:grid-cols-3" : "lg:grid-cols-2")}>
          <Card className="rounded-3xl border-slate-200 shadow-sm">
            <CardContent className="p-7">
              <SimpleIcon label="Res" className="bg-blue-50 text-blue-600 shadow-none" />
              <h2 className="mt-5 text-xl font-bold">研究方向</h2>
              <div className="mt-4 space-y-3">
                {profile.research.map((item) => (
                  <p key={item} className="text-sm leading-6 text-slate-600">• {item}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          {isAdvisor && (
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardContent className="p-7">
                <SimpleIcon label="Fund" className="bg-blue-50 text-blue-600 shadow-none" />
                <h2 className="mt-5 text-xl font-bold">科研项目</h2>
                <div className="mt-4 space-y-3">
                  {projects.slice(0, 6).map((item) => (
                    <p key={item} className="text-sm leading-6 text-slate-600">• {item}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="rounded-3xl border-slate-200 shadow-sm">
            <CardContent className="p-7">
              <SimpleIcon label={isAdvisor ? "Acad" : "Pub"} className="bg-blue-50 text-blue-600 shadow-none" />
              <h2 className="mt-5 text-xl font-bold">{isAdvisor ? "学术兼职" : "代表性成果"}</h2>
              <div className="mt-4 space-y-3">
                {(isAdvisor ? academicRoles : profile.publications).map((item, index) => (
                  <p key={`${profile.id}-top-${index}`} className="text-sm leading-6 text-slate-600">
                    {isAdvisor ? "• " : `[${index + 1}] `}{item}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <SimpleIcon label={isAdvisor ? "Pub" : "Info"} className="bg-blue-50 text-blue-600 shadow-none" />
            <h2 className="text-2xl font-bold">{isAdvisor ? "代表性论文" : "更多信息"}</h2>
          </div>
          <div className="space-y-4">
            {isAdvisor
              ? profile.publications.map((pub, index) => (
                  <div key={`${profile.id}-${index}`} className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                    <span className="mr-3 font-bold text-blue-600">[{index + 1}]</span>{pub}
                  </div>
                ))
              : [profile.email ? `联系邮箱：${profile.email}` : "邮箱信息待补充。", "可后续补充获奖情况等信息。"].map((item, index) => (
                  <div key={`${profile.id}-info-${index}`} className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                    • {item}
                  </div>
                ))}
          </div>
        </div>
      </section>

      {isAdvisor && (
        <section className="px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <SimpleIcon label="IP" className="bg-blue-50 text-blue-600 shadow-none" />
              <h2 className="text-2xl font-bold">科研创新</h2>
            </div>
            <div className="space-y-4">
              {patents.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">{item}</div>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="bg-slate-950 px-5 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} 华南理工大学机械与汽车工程学院 光声智能成像实验室. All Rights Reserved.
      </footer>
    </main>
  );
}

export default function LabWebsite() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("home");
  const [selectedMemberId, setSelectedMemberId] = useState(advisorProfile.id);
  const year = useMemo(() => new Date().getFullYear(), []);

  const goHome = () => {
    setPage("home");
    setOpen(false);
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  const openMemberDetail = (memberId) => {
    setSelectedMemberId(memberId);
    setPage("member");
    setOpen(false);
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  const scrollTo = (id) => {
    setPage("home");
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
    setOpen(false);
  };

  if (page === "member") {
    return <MemberDetailPage memberId={selectedMemberId} onBack={() => scrollTo("team")} />;
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {!siteDataIsValid && (
        <div className="bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700">
          网站数据缺失，请检查导航、研究方向、成员、成果、新闻或成员详情页配置。
        </div>
      )}

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={goHome} className="flex items-center gap-3" aria-label="返回首页">
            <SimpleIcon label="PA" />
            <div className="text-left">
              <div className="text-lg font-bold tracking-tight">光声智能成像</div>
              <div className="text-xs text-slate-500">华南理工大学 · 光声智能成像实验室</div>
            </div>
          </button>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="主导航">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-sm font-medium text-slate-600 transition hover:text-blue-600">
                {item.label}
              </button>
            ))}
          </nav>

          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "关闭菜单" : "打开菜单"}>
            <MenuIcon open={open} />
          </button>
        </div>
        {open && (
          <div className="border-t border-slate-100 bg-white px-5 py-3 lg:hidden">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="block w-full py-3 text-left text-sm font-medium text-slate-700">
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[-120px] h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              光声显微成像 · 光声断层成像 · 深度学习图像重建 · 智能无损检测
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
              光声智能成像实验室
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              华南理工大学机械与汽车工程学院光声智能成像实验室，围绕光声显微成像、光声断层成像、深度学习图像重建以及智能无损检测等方向开展研究，致力于发展高分辨率、高灵敏度和智能化的新型光声成像与检测技术。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button onClick={() => scrollTo("recruitment")} className="rounded-2xl bg-blue-600 px-6 py-6 text-base hover:bg-blue-700">
                招生信息 <ArrowRight />
              </Button>
              <Button variant="outline" onClick={() => scrollTo("research")} className="rounded-2xl px-6 py-6 text-base">
                了解研究方向
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="rounded-[2rem] border border-white/80 bg-white/70 p-4 shadow-2xl shadow-blue-100 backdrop-blur">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 p-8 text-white">
                <div className="mb-6">
                  <p className="text-sm font-semibold tracking-wide text-white/85">Main Research Directions</p>
                  <h2 className="mt-2 text-3xl font-bold md:text-4xl">主要研究方向</h2>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: "PAM", title: "光声显微成像", desc: "Photoacoustic Microscopy" },
                    { icon: "PACT", title: "光声断层成像", desc: "Photoacoustic Computed Tomography" },
                    { icon: "DL", title: "深度学习图像重建", desc: "Deep Learning-based Image Reconstruction" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-4 rounded-[1.75rem] bg-white/15 p-5 backdrop-blur-sm">
                      <SimpleIcon label={item.icon} className="h-14 w-14 shrink-0 bg-white/20 text-white shadow-none" />
                      <div className="min-w-0">
                        <p className="text-xl font-bold leading-tight md:text-2xl">{item.title}</p>
                        <p className="mt-1 break-words text-sm leading-6 text-white/85">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="research" className="px-5 py-20 lg:px-8">
        <SectionTitle eyebrow="Research" title="研究方向" text="围绕光声显微成像、光声断层成像、深度学习图像重建与智能无损检测开展多学科交叉研究。" />
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {researchItems.map((item) => (
            <Card key={item.title} className="rounded-3xl border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-7">
                <SimpleIcon label={item.icon} className="mb-5 bg-blue-50 text-blue-600 shadow-none" />
                <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="team" className="bg-slate-50 px-5 py-20 lg:px-8">
        <SectionTitle eyebrow="Team" title="团队成员" text="华南理工大学机械与汽车工程学院光声智能成像实验室。点击成员卡片可查看个人主页。" />
        <div className="mx-auto max-w-7xl space-y-8">
          {memberGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-xl font-bold text-slate-950">{group.title}</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {group.members.map((member) => (
                  <Card
                    key={`${member.role}-${member.name}`}
                    className="cursor-pointer overflow-hidden rounded-3xl border-none shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    onClick={() => openMemberDetail(member.id)}
                  >
                    <div className="flex h-32 items-center justify-center bg-gradient-to-br from-blue-100 to-cyan-100">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/70 text-2xl font-bold text-blue-600 shadow-sm">
                        {member.name.slice(0, 1)}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-semibold text-blue-600">{member.role}</p>
                        {member.enrollYear && (
                          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                            {member.enrollYear}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 text-xl font-bold">{member.name}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{member.desc}</p>
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          openMemberDetail(member.id);
                        }}
                        className="mt-5 text-sm font-semibold text-blue-600 hover:text-blue-700"
                      >
                        查看个人主页 →
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="publications" className="px-5 py-20 lg:px-8">
        <SectionTitle eyebrow="Achievements" title="成果展示" text="展示课题组在论文、专利、项目和实验平台建设方面的代表性成果。" />
        <div className="mx-auto mb-8 grid max-w-7xl gap-6 lg:grid-cols-3">
          <Card className="rounded-3xl border-slate-200 shadow-sm">
            <CardContent className="p-7">
              <SimpleIcon label="Fund" className="bg-blue-50 text-blue-600 shadow-none" />
              <h3 className="mt-5 text-xl font-bold">科研项目</h3>
              <div className="mt-4 space-y-3">
                {projects.map((item) => (
                  <p key={item} className="text-sm leading-6 text-slate-600">• {item}</p>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-slate-200 shadow-sm">
            <CardContent className="p-7">
              <SimpleIcon label="IP" className="bg-blue-50 text-blue-600 shadow-none" />
              <h3 className="mt-5 text-xl font-bold">科研创新</h3>
              <div className="mt-4 space-y-3">
                {patents.map((item) => (
                  <p key={item} className="text-sm leading-6 text-slate-600">• {item}</p>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-slate-200 shadow-sm">
            <CardContent className="p-7">
              <SimpleIcon label="Acad" className="bg-blue-50 text-blue-600 shadow-none" />
              <h3 className="mt-5 text-xl font-bold">学术兼职</h3>
              <div className="mt-4 space-y-3">
                {academicRoles.map((item) => (
                  <p key={item} className="text-sm leading-6 text-slate-600">• {item}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <SimpleIcon label="Pub" className="bg-blue-50 text-blue-600 shadow-none" />
            <h3 className="text-2xl font-bold">代表性成果</h3>
          </div>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div key={pub} className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                <span className="mr-3 font-bold text-blue-600">[{index + 1}]</span>{pub}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="recruitment" className="px-5 py-20 lg:px-8">
        <SectionTitle eyebrow="Join Us" title="招生信息" text="欢迎对光声显微成像、光声断层成像、深度学习图像重建、智能无损检测和生物医学工程感兴趣的同学加入。" />
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            { icon: "MSc", title: "招生对象", text: "欢迎硕士研究生、博士研究生、本科科研训练学生加入课题组。" },
            { icon: "BG", title: "专业背景", text: "机械工程、精密仪器设计、仪器控制编程、信号处理、自动化、图像处理、光学、生物医学工程等相关背景均可。" },
            { icon: "@", title: "申请方式", text: "请将个人简历、成绩单和研究兴趣发送至课题组联系邮箱。" },
          ].map((item) => (
            <Card key={item.title} className="rounded-3xl border-slate-200 shadow-sm">
              <CardContent className="p-7">
                <SimpleIcon label={item.icon} className="bg-blue-50 text-blue-600 shadow-none" />
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-blue-50 px-5 py-20 lg:px-8">
        <SectionTitle eyebrow="Contact" title="联系我们" text="欢迎学术交流、项目合作与学生咨询。" />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <Card className="rounded-3xl border-none shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <SimpleIcon label="Office" className="shrink-0 bg-white text-blue-600 shadow-none" />
                <div>
                  <h3 className="font-bold">导师办公室</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">华南理工大学五山校区10号楼325</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-none shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <SimpleIcon label="Lab" className="shrink-0 bg-white text-blue-600 shadow-none" />
                <div>
                  <h3 className="font-bold">实验室地址</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">华南理工大学五山校区焊接楼</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-none shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <SimpleIcon label="Mail" className="shrink-0 bg-white text-blue-600 shadow-none" />
                <div>
                  <h3 className="font-bold">联系邮箱</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">cjiangbo@scut.edu.cn</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-8 text-center text-sm text-slate-400">
        © {year} 华南理工大学机械与汽车工程学院 光声智能成像实验室. All Rights Reserved.
      </footer>
    </main>
  );
}
