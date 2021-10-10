import { useContext, useEffect } from "react";

import { RouterContext } from "./RouterContext";

export default function Prompt(props) {
  const { when = true, message } = props;
  const context = useContext(RouterContext);

  useEffect(() => {
    if (!when) return;
    return context.history.block(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

// export default function Prompt(props) {
//   const { when = true, message } = props;
//   return (
//     <RouterContext.Consumer>
//       {(context) => {
//         if (!when) return null;
//         let method = context.history.block;
//         return (
//           <CycleLife
//             onMount={(self) => {
//               self.release = method(message);
//             }}
//             onUnmount={(self) => {
//               self.release();
//             }}
//           />
//         );
//       }}
//     </RouterContext.Consumer>
//   );
// }

// class CycleLife extends React.Component {
//   componentDidMount() {
//     this.props.onMount && this.props.onMount.call(this, this);
//   }
//   componentWillUnmount() {
//     this.props.onUnmount && this.props.onUnmount.call(this, this);
//   }
//   render() {
//     return null;
//   }
// }
