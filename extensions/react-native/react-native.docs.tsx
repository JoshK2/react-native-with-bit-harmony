import React from 'react';
import {Section} from '@teambit/documenter.ui.section';
import {ThemeContext} from '@teambit/documenter.theme.theme-context';
import {Separator} from '@teambit/documenter.ui.separator';

export default function Overview() {
  return (
    <ThemeContext>
      <>
        <Section>
          The React Native extesnion is based on the React envs and compile
          React Native component. <br />
          The extension use react-native-web to render the components in
          compositions tab and examples.
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
}

Overview.abstract = 'A React Native extension.';

Overview.labels = ['react native', 'typescript', 'extension', 'compiler'];
