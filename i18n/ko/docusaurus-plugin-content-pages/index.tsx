import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import GitHubStarButton from "@site/src/components/GitHubStarButton";
import styles from "@site/src/pages/styles.module.css";

const features = [
  {
    title: "모든 브라우저 \u2022 모든 플랫폼 \u2022 하나의 API",
    description: (
      <>
        <p>
          <b>크로스 브라우저.</b> Playwright는 Chromium, WebKit, Firefox를
          포함한 모든 최신 렌더링 엔진 을 지원합니다.
        </p>
        <p>
          <b>크로스 플랫폼.</b> Windows, Linux, macOS에서 로컬로 테스트하거나
          에서 헤드리스 또는 헤딩으로 테스트하세요.
        </p>
        <p>
          <b>다른 언어.</b> Playwright API 사용{" "}
          <a href="https://playwright.dev/docs/intro">타입스크립트</a>,{" "}
          <a href="https://playwright.dev/docs/intro">자바스크립트</a>,{" "}
          <a href="https://playwright.dev/python/docs/intro">Python</a>,{" "}
          <a href="https://playwright.dev/dotnet/docs/intro">.NET</a>,{" "}
          <a href="https://playwright.dev/java/docs/intro">Java</a>.
        </p>
        <p>
          <b>모바일 웹 테스트</b>
          Android 및 모바일 사파리용 구글 크롬의 네이티브 모바일 에뮬레이션.
          데스크톱과 클라우드에서 동일한 렌더링 엔진이 작동합니다.
        </p>
      </>
    ),
  },
  {},
  {},
  {
    title: "Resilient \u2022 No flaky tests",
    description: (
      <>
        <p>
          <b>Auto-wait.</b> Playwright는 동작을 수행하기 전에 요소가 실행
          가능해질 때까지 기다립니다. 또한 다양한 인트로스펙션 이벤트가
          있습니다. 이 두 가지를 결합하면 인위적인 시간 초과( )가 필요하지
          않으며, 이는 불안정한 테스트의 주요 원인입니다.
        </p>
        <p>
          <b>Web-first assertions.</b> 플레이메이커 어설션은 동적 웹을 위해
          특별히 생성됩니다. 필요한 조건이 충족될 때까지 검사가 자동으로 다시
          시도됩니다( ).
        </p>
        <p>
          <b>Tracing.</b> 테스트 재시도 전략 구성, 실행 캡처 추적, 동영상,
          스크린샷을 통해 플레이크를 제거합니다.
        </p>
      </>
    ),
  },
  {
    title: "No trade-off \u2022 제한 없음",
    description: (
      <>
        <p>
          브라우저는 서로 다른 프로세스에서 서로 다른 출처에 속한 웹 콘텐츠를
          실행합니다. Playwright는 최신 브라우저 아키텍처( )에 맞춰져 있으며
          프로세스 외부에서 테스트를 실행합니다. 따라서 Playwright는 일반적인
          인-프로세스 테스트 러너( )의 제한이 없습니다.
        </p>
        <p>
          <b>다양한 모든 것.</b> 여러 개의 <b>탭</b>, 여러 <b>오리진</b> 및 여러{" "}
          <b>사용자에</b> 걸친 시나리오를 테스트할 수 있습니다. 사용자별로 서로
          다른 컨텍스트가 포함된 시나리오를 생성하고 서버에 대해 실행하여 하나의
          테스트에서 모두 테스트하세요.
        </p>
        <p>
          <b>신뢰할 수 있는 이벤트.</b> 요소에 마우스를 올려 동적 컨트롤과 상호
          작용하고 신뢰할 수 있는 이벤트를 생성합니다. Playwright는 실제
          사용자와 구분할 수 없는 실제 브라우저 입력 파이프라인 을 사용합니다.
        </p>
        <p>
          <b>프레임 테스트, 섀도 DOM 피어싱</b> Playwright 선택기는 섀도 DOM을
          피어싱하여 프레임을 원활하게 입력할 수 있도록 합니다.
        </p>
      </>
    ),
  },
  {},
  {},
  {
    title: "완전 격리 \u2022 빠른 실행",
    description: (
      <>
        <p>
          <b>브라우저 컨텍스트.</b> Playwright는 각 테스트에 대해 브라우저
          컨텍스트를 생성합니다. 브라우저 컨텍스트는 새로운 브라우저 프로필과
          동일합니다. 이를 통해 오버헤드 없이 완전한 테스트 격리를 제공합니다.
          새로운 브라우저 컨텍스트를 생성하는 데 몇 밀리초밖에 걸리지 않습니다.
        </p>
        <p>
          <b>한 번 로그인합니다.</b> 컨텍스트의 인증 상태를 저장하고 모든
          테스트에서 재사용합니다. 이렇게 하면 각 테스트에서 반복적인 로그인
          작업( )을 우회하면서도 독립적인 테스트를 완전히 격리할 수 있습니다.
        </p>
      </>
    ),
  },
  {
    title: "강력한 도구",
    description: (
      <>
        <p>
          <b>
            <a href="docs/codegen">Codegen.</a>
          </b>{" "}
          작업을 기록하여 테스트를 생성하세요. 원하는 언어로 저장하세요.
        </p>
        <p>
          <b>
            <a href="docs/debug#playwright-inspector">플레이라이트 인스펙터.</a>
          </b>{" "}
          페이지 검사, 선택기 생성, 테스트 실행 단계, 클릭 포인트 참조, 실행
          로그 탐색.
        </p>
        <p>
          <b>
            <a href="docs/trace-viewer-intro">트레이스 뷰어.</a>
          </b>{" "}
          테스트 실패를 조사하기 위해 모든 정보를 캡처합니다. 플레이메이커
          트레이스에는 테스트 실행 스크린캐스트, 라이브 DOM 스냅샷, 액션 탐색기,
          테스트 소스 등이 포함됩니다.
        </p>
      </>
    ),
  },
];

type FeatureProps = {
  imageUrl?: string;
  title?: string;
  description?: React.ReactElement;
};

const Feature: React.FC<FeatureProps> = ({ imageUrl, title, description }) => {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div
      className={clsx("col col--6", styles.feature)}
      style={{ marginTop: 40 }}
    >
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  );
};

type FeatureRowProps = {
  title: string;
  description: string;
  videoUrl: string;
  isImageLeft: boolean;
};

const FeatureRow: React.FC<FeatureRowProps> = ({
  title,
  description,
  videoUrl,
  isImageLeft,
}) => {
  const textColumn = (
    <div className={"col col--5"}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
  const imageColumn = (
    <div className={"col col--7"}>
      <video muted controls loop>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
  return (
    <section
      className={clsx(!isImageLeft ? styles.featureContainerAlt : undefined)}
    >
      <div className={"container"}>
        <div
          className={clsx(
            "row",
            styles.featureRow,
            !isImageLeft ? styles.featureRowAlt : undefined
          )}
        >
          {imageColumn}
          {textColumn}
        </div>
      </div>
    </section>
  );
};

const logos = [
  {
    imageUrl: "img/logos/VSCode.png",
    href: "https://code.visualstudio.com",
    alt: "VS Code",
  },
  { imageUrl: "img/logos/Bing.png", href: "https://bing.com", alt: "Bing" },
  {
    imageUrl: "img/logos/Outlook.png",
    href: "https://outlook.com",
    alt: "Outlook",
  },
  {
    imageUrl: "img/logos/DHotstar.jpg",
    href: "https://www.hotstar.com/",
    alt: "Disney+ Hotstar",
  },
  {
    imageUrl: "img/logos/MUI.png",
    href: "https://github.com/mui-org/material-ui",
    alt: "Material UI",
  },
  {
    imageUrl: "img/logos/ING.png",
    href: "https://github.com/ing-bank/lion",
    alt: "ING",
  },
  {
    imageUrl: "img/logos/Adobe2.png",
    href: "https://github.com/adobe/spectrum-web-components",
    alt: "Adobe",
  },
  {
    imageUrl: "img/logos/ReactNavigation.png",
    href: "https://github.com/react-navigation/react-navigation",
    alt: "React Navigation",
  },
  {
    imageUrl: "img/logos/accessibilityinsights.png",
    href: "https://accessibilityinsights.io/",
    alt: "Accessibility Insights",
  },
];

const Home: React.FC = () => {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  return (
    <Layout
      title={siteConfig.tagline}
      description="Cross-browser end-to-end testing for modern web apps"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx("hero__title", styles.heroTitle)}>
            <span className={styles.highlight}>Playwright</span>를 사용하면 최신
            웹 앱에서 안정적인 엔드투엔드 테스트를 수행할 수 있습니다.
          </h1>
          <div className={styles.buttons}>
            <Link className={styles.getStarted} to={useBaseUrl("docs/intro")}>
              Get started
            </Link>
            <GitHubStarButton
              owner="microsoft"
              repo={siteConfig.customFields.repositoryName as string}
            />
          </div>
        </div>
      </header>
      <br></br>
      <main>
        <br></br>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <img
            src="img/logos/Browsers.png"
            width="40%"
            alt="브라우저(Chromium, Firefox, WebKit)"
          />
        </div>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.logosSection}>
          <div className="container">
            <div className="row">
              <div className={clsx("col col--12", styles.logosColumn)}>
                <h2>기업 및 오픈소스 프로젝트에서 선택</h2>
                <ul className={styles.logosList}>
                  {logos.map(({ imageUrl, href, alt }, idx) => (
                    <li key={idx}>
                      <a href={href} target="_blank" rel="noreferrer noopener">
                        <img src={imageUrl} alt={alt} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
