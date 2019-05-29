import React from 'react';
// Material-ui 컴포넌트들
import Typography from '@material-ui/core/Typography';

const Page = props => {
  return (
    <React.Fragment>
      <Typography variant="h3" noWrap>
        아이콘들 (Icons) 
      </Typography>
      <br />
      <Typography paragraph>
        <a href="https://material.io/tools/icons/" target="_blank" rel="noopener noreferrer">
          머터리얼(Material) 아이콘
        </a>을 사용합니다.
        이 관리자 페이지는는 Material-UI frameworks를 채택했기 때문이죠.
        <br />
        (추후 다른 아이콘도 지원을 생각합니다.)
      </Typography>
    </React.Fragment>
  );
}

export default Page;