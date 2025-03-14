declare module 'react-slick' {
    import * as React from 'react';
  
    export interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      pauseOnHover?: boolean;
      responsive?: Array<{
        breakpoint: number;
        settings: Partial<Settings>;
      }>;
      className?: string;
      centerMode?: boolean;
      centerPadding?: string;
      fade?: boolean;
      focusOnSelect?: boolean;
      rtl?: boolean;
      swipe?: boolean;
      variableWidth?: boolean;
      vertical?: boolean;
      afterChange?: (current: number) => void;
      beforeChange?: (current: number, next: number) => void;
      customPaging?: (index: number) => React.ReactNode;
      appendDots?: (dots: React.ReactNode) => React.ReactNode;
    }
  
    export default class Slider extends React.Component<Settings> {}
  }
  