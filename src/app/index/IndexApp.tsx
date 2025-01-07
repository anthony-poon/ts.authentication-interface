import env from '@env';

const IndexApp = () => {
  return (
    <div>
      Hello World. Current environment: {env.APP_ENV}
    </div>
  )
}

export default IndexApp;