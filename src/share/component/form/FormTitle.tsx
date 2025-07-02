import { Title } from '@component/text';
import { Box } from '@mui/material';

const FormTitle = (props: React.PropsWithChildren<{}>) => {
  return (
    <Box mb={3}>
      <Title>{ props.children }</Title>
    </Box>
  )
}

export default FormTitle;