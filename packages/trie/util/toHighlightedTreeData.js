import _ from 'lodash';
import toTreeData from './toTreeData.js';

export default function mapTrie(data, searchWord) {
  data.highlighted = searchWord.includes(data.name) || data.name === "<root>";

  if (data.children) data.children.map(d => mapTrie(d, searchWord));
  return data;
}
