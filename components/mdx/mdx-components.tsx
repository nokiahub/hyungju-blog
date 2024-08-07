import { useMDXComponent } from "next-contentlayer/hooks";
import { Figcaption } from "@/components/mdx/mdx-figcaption";
import { ImageWithModal } from "@/components/mdx/image-with-modal";

type Props = {
  post: {
    body: {
      code: string;
    };
  };
};

const mdxComponents = {
  figcaption: Figcaption,
  ImageWithModal: ImageWithModal,
};
export default function MdxComponents({ post }: Props) {
  const MDXComponent = useMDXComponent(post?.body?.code || "");

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*@ts-expect-error*/}
      <MDXComponent components={mdxComponents} />
    </>
  );
}
