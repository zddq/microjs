interface BBImgProps {
  /**
   * 图片地址
   */
  src: string;
  /**
   * 图片描述
   * @default "默认图片描述"
   */
  alt?: string;
  /**
   * 点击事件
   */
  onClick?(ev: React.MouseEvent<HTMLImageElement>): void;
}
