import type { NextPage } from 'next';
import { Htag, Button, Ptag, Tag } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Ptag>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero culpa
        iste nam iusto dolorum harum. Odio, provident voluptatem facilis sint,
        magnam quisquam, qui nobis consequuntur obcaecati delectus voluptate.
        Cum, corrupti.
      </Ptag>
      <Ptag size="large">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero culpa
        iste nam iusto dolorum harum. Odio, provident voluptatem facilis sint,
        magnam quisquam, qui nobis consequuntur obcaecati delectus voluptate.
        Cum, corrupti.
      </Ptag>
      <Ptag size="small">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero culpa
        iste nam iusto dolorum harum. Odio, provident voluptatem facilis sint,
        magnam quisquam, qui nobis consequuntur obcaecati delectus voluptate.
        Cum, corrupti.
      </Ptag>
      <Tag color="primary" size="large">
        Hello
      </Tag>
      <Button appearance="primary" arrow="right">
        Hello, world!
      </Button>
      <Button appearance="ghost">Hello, world!</Button>
    </div>
  );
};

export default Home;
