import S from "@sanity/desk-tool/structure-builder"
import postsByTag from "./postsByTag"

export default () =>
  S.list()
    .title("Base")
    .items([postsByTag, ...S.documentTypeListItems()])
