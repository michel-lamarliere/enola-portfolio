import React from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Markdown from "react-markdown";
import cn from "classnames";

import { useGetArticle } from "features/article/api/getArticle";
import RoundedButton, {
  RoundedButtonTypes,
} from "components/uiElements/RoundedButton/RoundedButton";
import { routes } from "config/routes";
import { Articles } from "features/article/components/Articles/Articles";
import { ArticleTag } from "features/article/components/ArticleTag";
import { Skeleton } from "components/uiElements/Skeleton";

import elImg from "assets/about.jpg";

import styles from "./ArticlePage.module.scss";

export const ArticlePage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetArticle(id);

  return (
    <div className={styles.ArticlePage}>
      {isLoading && <ArticleSkeleton />}
      {isError ||
        (!isLoading && !data && (
          <div className={styles.error}>Une erreur est survenue</div>
        ))}
      {data && (
        <>
          <div className={styles.headerWrapper}>
            <div className={styles.header}>
              <div className={styles.header_one}>
                <img
                  src={data?.coverImage}
                  alt={data?.title}
                  className={styles.header_image}
                />
                <div className={styles.header_text}>
                  <time
                    className={styles.header_text_date}
                    dateTime={data.date}
                  >
                    Écrit le{" "}
                    {format(new Date(data.date), "dd MMMM yyyy", {
                      locale: fr,
                    })}
                  </time>
                  <div className={styles.header_text_title}>{data?.title}</div>
                  <ArticleTag text={data.tag} />
                </div>
              </div>
              <div className={styles.header_description}>
                {data.description}
              </div>
            </div>
          </div>
          <Markdown className={styles.paragraph}>{data.paragraph}</Markdown>
        </>
      )}
      <div className={styles.presentationWrapper}>
        <div className={styles.presentation}>
          <img src={elImg} alt={"Moi"} className={styles.presentation_img} />
          <div className={styles.presentation_text}>
            <div className={styles.presentation_text_title}>
              Hello ! Moi c’est Enola,
            </div>
            <div className={styles.presentation_text_subTitle}>
              Designer de marque passionnée.
            </div>
            <div className={styles.presentation_text_description}>
              {" "}
              Je crée des identités visuelles uniques pour aider les entreprises
              à se démarquer et communiquer leurs valeurs, le tout dans la bonne
              humeur !
            </div>
            <RoundedButton
              text={"Découvrir mes service"}
              type={RoundedButtonTypes.LINK}
              to={routes.services.url()}
            />
          </div>
        </div>
      </div>
      <div className={styles.moreWrapper}>
        <div className={styles.more}>
          <div className={styles.more_title}>Plus d’articles</div>
          <Articles limit={3} />
          <RoundedButton
            text={"Voir tous les articles"}
            type={RoundedButtonTypes.LINK}
            to={routes.blog.url()}
            className={styles.more_linkToBlog}
          />
        </div>
      </div>
    </div>
  );
};

const ArticleSkeleton = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={cn(styles.header_one, styles.skeleton_header_one)}>
          <Skeleton className={cn(styles.header_image, styles.skeleton_img)} />
          <div className={cn(styles.header_text, styles.skeleton_header_text)}>
            <Skeleton
              className={cn(styles.header_text_date, styles.skeleton_date)}
            />
            <Skeleton
              className={cn(styles.header_text_title, styles.skeleton_title)}
            />
            <Skeleton
              className={cn(styles.header_text_tag, styles.skeleton_tag)}
            />
          </div>
        </div>
        <Skeleton
          className={cn(styles.header_description, styles.skeleton_description)}
        />
      </div>
    </div>
  );
};
