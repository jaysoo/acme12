import * as React from  'react';
import {foo} from  '@acme12/utils'

export interface UiButtonProps {
  children?: React.ReactNode;
}

foo('test');

export function UiButton(props: UiButtonProps) {
  return (
    <button>
      {props.children}      
    </button>
  );
}

export default UiButton;
