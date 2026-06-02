import React, {useRef} from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({posts, title, remove}) => {
  
  const itemRefs = useRef({});

  if (!posts.length) {
    return (
      <h1 style={{textAlign: 'center'}}>
        Посты не найдены!
      </h1>
    )
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          if (!itemRefs.current[post.id]) {
            itemRefs.current[post.id] = React.createRef();
          }
          const itemRef = itemRefs.current[post.id];

          return (
            <CSSTransition
              key={post.id}
              nodeRef={itemRef}
              timeout={500}
            >
              <div ref={itemRef}>
                <PostItem post={post} remove={remove} />
              </div>
            </CSSTransition>
          );
          }        
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;