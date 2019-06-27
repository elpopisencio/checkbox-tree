import React from 'react';

const Leaf = ({tree, root, onClick}) => (
  <div>
    <label
      className="button"
      style={{border: 'none'}}
      onClick={() => onClick({[root]: !tree[root]})}>
      <span className={'icon has-text-' + (tree[root] ? 'success' : 'danger')}>
        <i className={'fas fa-' + (tree[root] ? 'check' : 'times')} />
      </span>
      <span>{root}</span>
    </label>
  </div>
);

export default Leaf;
