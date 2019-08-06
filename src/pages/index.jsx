import React from 'react';
import Helmet from 'react-helmet';

import styled from 'styled-components';

import Typography from 'typography';
import githubTheme from 'typography-theme-github';

const typography = new Typography(githubTheme);
typography.injectStyles();

const Container = styled.div`
  max-width: 560px;
  margin: 24px auto;
  padding: 0 16px;
`;

const IndexPage = () => (
  <Container>
    <Helmet
      title="Minsik Kim"
    />
    <h1>
      김민식
      <sub> Bernard</sub>
    </h1>
    <address>
      kmsbernard@gmail.com
      <br />
      instagram.com/kms.bernard
      <br />
      facebook.com/kmsbernard
    </address>
    <h2>
      관심사
    </h2>
    <p>
      클래식 음악, 일본 애니메이션, 사진, 미술, 비디오 게임, 영화, 소설
      <br />
      프로그래밍, 인터넷, 기술
      <br />
      정치, 인권, 자본주의, 사회주의, 민주주의
    </p>
    <h2>
      취미
    </h2>
    <p>
      음악 듣기, 사진 찍기, 영화 보기, 게임 하기, 그림 그리기, 소설 읽기
    </p>
    <h2>
      기술
    </h2>
    <p>
      웹 프로그래밍 (aws, python, js, ts, react, webpack, etc...)
      <br />
      오픈소스
      <a href="https://github.com/bernard-kms/react-daum-postcode"> react-daum-postcode</a>
      <br />
      iOS 앱 (swift)
    </p>
    <h2>
      일
    </h2>
    <p>
      대표, 주식회사 노페땅 : 3000won.com, hyangyugorae.com
      <br />
      엔지니어, 주식회사 마인딩 : minding.today
    </p>
  </Container>
);

export default IndexPage;
