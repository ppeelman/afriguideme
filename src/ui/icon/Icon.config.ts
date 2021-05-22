import sprite from "../../assets/icons/sprite.svg";

export enum IconType {
  STAR = "STAR",
  PERSON = "PERSON",
  CALENDAR = "CALENDAR",
  HEART = "HEART",
  DELETE = "DELETE",
  MAP = "MAP",
  MORE_DETAILS = "MORE_DETAILS"
}

export enum IconSize {
  SMALL = "20px",
  MEDIUM = "30px"
}

type Icons = {
  [type: string]: string;
};

export const icons: Icons = {
  [IconType.HEART]: sprite + "#icon-heart",
  [IconType.STAR]: sprite + "#icon-star",
  [IconType.PERSON]: sprite + "#icon-user",
  [IconType.CALENDAR]: sprite + "#icon-calendar",
  [IconType.DELETE]: sprite + "#icon-delete",
  [IconType.MORE_DETAILS]: sprite + "#icon-cog",
  [IconType.MAP]: sprite + "#icon-location"
};
