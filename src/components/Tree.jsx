import React, {useState} from 'react';
import {hasSelected} from './hasSelected';
import Leaf from './Leaf';

const SubTree = ({tree, onClick, expanded, setExpanded, root}) => {
  const keys = Object.keys(tree[root]);
  const handleClick = (subTree, key) => {
    let newTree = {...tree};
    newTree[root] = {...tree[root], ...subTree};
    onClick({...newTree});
  };
  return (
    <div>
      <label
        className="button"
        onClick={() => setExpanded(!expanded)}
        style={{border: 'none'}}>
        <span
          className={'icon ' + (hasSelected(tree) ? '' : 'has-text-danger')}>
          <i className={'fas fa-chevron-' + (expanded ? 'down' : 'right')} />
        </span>
        <span>{root}</span>
      </label>
      {expanded && (
        <div
          style={{
            marginLeft: '1.5em',
            display: 'flex',
            flexDirection: 'column',
          }}>
          {keys &&
            keys.map(key => (
              <RecursiveCheckboxTree
                checked={{[key]: tree[root][key]}}
                tree={{[key]: tree[root][key]}}
                onClick={subTree => handleClick(subTree, key)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

const RecursiveCheckboxTree = ({tree, onClick, isExpanded}) => {
  const [expanded, setExpanded] = useState(isExpanded || false);
  const root = Object.keys(tree)[0];
  if (typeof tree[root] === 'boolean') {
    return <Leaf tree={tree} root={root} onClick={onClick} />;
  }
  return (
    <SubTree
      tree={tree}
      onClick={onClick}
      expanded={expanded}
      setExpanded={setExpanded}
      root={root}
    />
  );
};

export default RecursiveCheckboxTree;
