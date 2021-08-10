import { Component } from 'react';
import {
  IErrorBoundaryProps,
  IErrorBoundaryState,
} from './error-boundary.frontend.web.app.components.types';

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error: any, info: any) {
    console.log(error);
  }
  render() {
    if (this.state.hasErrored) {
      return (
        <div>
          <img src="https://i.imgur.com/lKJiT77.png" alt="Not found" />
          <div>The puppy ate this page and it's broken. Sorry.</div>
        </div>
      );
    }
    return this.props.children;
  }
}
