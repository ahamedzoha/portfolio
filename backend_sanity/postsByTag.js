import S from "@sanity/base/structure-builder"
import documentStore from "part:@sanity/base/datastore/document"
import { map } from "rxjs/operators"

// Get all an array of all tags defined on all 'post' type
const query = `*[_type == 'works' && count(tags) > 0].tags[]`

export default S.listItem()
  .title("Posts by Tag")
  .child(() =>
    // By using documentStore.listenQuery, our panes will automatically show any new documents or tags we create
    documentStore.listenQuery(query).pipe(
      map((tags) => {
        //filter the array of tags to remove duplicate objects
        const uniqueTags = tags.filter((value, index) => {
          const _value = JSON.stringify(value)
          console.log(_value)
          return (
            index ===
            tags.findIndex((obj) => {
              return JSON.stringify(obj) === _value
            })
          )
        })

        return S.list()
          .title("Posts By Tag")
          .items([
            ...uniqueTags.map((tag) => {
              return S.listItem()
                .title(tag[0].label)
                .child(
                  S.documentList()
                    .title(tag[0].label)
                    .filter(`_type == 'works' && $tag in tags[].value`)
                    .params({ tag: tag[0].value })
                )
            }),
          ])
      })
    )
  )
