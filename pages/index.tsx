import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { withLayout } from '../layout/Layout';
import { Htag, Button, Ptag, Tag, Rating } from '../components';
import axios from 'axios';
import { IMenuItem } from '../interfaces/menu.interface';

const Home = ({ menu, firstCategory }: IHomeProps): JSX.Element => {
  const [rating, setRating] = useState<number>(3);
  return (
    <>
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
      <Rating rating={rating} setRating={setRating} isEditable />
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory
    }
  );
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}
