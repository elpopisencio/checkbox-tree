import React, {useState} from 'react';
import Tree from './components/Tree';

const TREE = {
  tree: {
    one: {
      one_one: true,
      one_two: false,
    },
    two: true,
    three: {
      three_one: {
        three_one_one: true,
        three_one_two: false,
      },
    },
  },
};

const App = () => {
  const [tree, setTree] = useState(TREE);
  return <Tree tree={tree} onClick={setTree} />;
};

export default App;
