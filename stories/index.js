import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import styled, { css } from 'styled-components';

const CustomButton = styled.button`
  background: #fafafabb;
  border-radius: 5px;
  border: 0px;
  color: #03a9f4;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${props =>
    props.primary &&
    css`
      background: #03a9f455;
      border: 0px;
      color: #fafafa;
    `};
`;

storiesOf('Button', module)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('with another emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😉😢😁😊😍😎
      </span>
    </Button>
  ))
  .add('Custom Button', () => <CustomButton>Custom Button</CustomButton>)
  .add('Custom Button primary', () => (
    <CustomButton primary>Custom Button primary</CustomButton>
  ));
