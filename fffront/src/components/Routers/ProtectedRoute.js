import { Route, Navigate} from "react-router-dom";
import { getToken } from '../../utils/tokenFunction'

function ProtectedRoute({ element: Element, ...rest }) {
  const token = getToken();

  return (
    <Route
      {...rest}
      // location은 render 메서드의 파라미터로 전달된 값으로, 현재 경로 정보를 담고 있음.
      render={({ location }) => {
        if (token === true) {
          return <Element />;
        } else {
            // state는 Navigate 컴포넌트를 통해 다른 경로로 이동할 때 상태 정보를 전달할 수 있는 객체. 
            // Navigate 컴포넌트뿐만 아니라, Link, Redirect, useNavigate 훅 등에서도 state를 사용할 수 있음. state는 이전 경로와 같이 다른 경로로 이동할 때 추가적인 정보를 전달할 때 유용.
            // from은 이전 경로를 나타내는 속성으로, 이전 경로로부터 이동했을 경우 다시 해당 경로로 돌아갈 수 있도록 정보를 전달.
            // state 속성으로 { from: location } 값을 전달.
            // 현재 위치 정보를 from 속성에 저장하여, 로그인을 완료한 후 다시 이전 경로로 돌아갈 수 있도록 하는데 사용됨. 
          return <Navigate to="/LoginForm" state={{ from: location }} />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
