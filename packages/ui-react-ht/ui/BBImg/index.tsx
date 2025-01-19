import ss from "./index.module.scss";

/**
 * @name 基础组件-图片
 */
export default function BBImg(props: BBImgProps) {
  const { src, alt = "默认图片描述", onClick } = props;
  return <img className={ss.img} src={src} alt={alt || ""} onClick={onClick} />;
}
