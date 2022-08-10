import type { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { withLayout } from '../../layout/Layout';
import axios from 'axios';
import { IMenuItem } from '../../interfaces/menu.interface';
import { ITopPageModel } from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';

const Course = ({ menu, firstCategory }: ICourseProps): JSX.Element => {
  const [rating, setRating] = useState<number>(3);
  return <></>;
};

export default withLayout(Course);

export const getStaticProps: GetStaticProps<ICourseProps> = async ({
  params
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    };
  }
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory
    }
  );
  const { data: page } = await axios.get<ITopPageModel>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`
  );
  return {
    props: {
      menu,
      firstCategory,
      page
    }
  };
};

interface ICourseProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
  page: ITopPageModel;
}
