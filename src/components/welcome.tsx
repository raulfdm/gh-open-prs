import React from "react";
import styled from "styled-components";

const WelcomeStyled = styled.section`
  font-size: 1rem;
  p {
    margin-top: 0;
  }
`;

const List = styled.ul`
  margin-bottom: 2rem;
`;

const Items = styled.li`
  margin-bottom: 0.8rem;
  a {
    color: inherit;
  }
`;

const Example = styled.code`
  display: inline-block;
  padding: 3px 5px;
  margin-top: 10px;
  border-radius: 3px;
  background-color: rgb(57, 59, 62);
`;

const TopicTitle = styled.h3`
  margin: 0;
`;

export const Welcome = () => {
  return (
    <WelcomeStyled>
      <h2>
        <span>💃</span>
        Welcome
        <span>🕺</span>
      </h2>
      <p>So do you want to track your PR's, huh?</p>
      <p>To do it you must to fill:</p>
      <List>
        <Items>
          The name from the <strong>organization</strong> you want to get
          projects;
        </Items>
        <Items>
          The repository names you want to track split by comma (
          <Example>,</Example>). For example:{" "}
          <Example>my-repo, another-one, incredibleRepository</Example>
        </Items>
        <Items>
          Your Github API Token. Don't know how or why?{" "}
          <a href="https://github.com/raulfdm/gh-open-prs">
            Check this project README.
          </a>
        </Items>
      </List>

      <TopicTitle>Is this Secure? 👮‍♂️</TopicTitle>
      <p>
        Any information here is send to anywhere. All your{" "}
        <Example>settings</Example> are saved on Cookies <span>🍪</span>. The
        only information stored on Local Storage are your label filter.
      </p>

      <p>
        Are you still not sure? This is a Open Source project. Check the code
        implementation <span>😅</span>.
      </p>

      <TopicTitle>Reports 🐛</TopicTitle>
      <p>
        Any issue, feedbacks or improvements, please click on the Octocat in the
        footer bar!
      </p>

      <p>Cheers! 🥂</p>
    </WelcomeStyled>
  );
};
