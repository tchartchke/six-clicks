import React from 'react';
import { Link } from 'react-router-dom';

const Rules = () => {
  return(
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros est, convallis a auctor eu, pellentesque at risus. Quisque odio sem, feugiat vel turpis at, fringilla consequat enim. Maecenas ligula dui, posuere ac nunc eget, posuere efficitur nisi. Vestibulum ullamcorper fringilla tristique. Morbi ipsum ante, vehicula non urna sed, tempus consequat diam. Phasellus sodales ligula non pharetra tempor. Etiam sed commodo sapien, at interdum orci. Nunc faucibus venenatis nisi vel gravida. Quisque urna lectus, porta feugiat erat vitae, ullamcorper elementum elit. Aenean maximus arcu odio, sed feugiat odio commodo id. Proin fermentum lorem vel venenatis rutrum. Nulla rutrum consequat tristique. Suspendisse vehicula arcu ut arcu elementum bibendum.</p>
        <p>Aliquam non est nec nisi rhoncus maximus. Morbi ut hendrerit augue. Integer et placerat felis, sed feugiat urna. Aliquam condimentum felis quis vehicula gravida. Nullam tortor massa, dictum at feugiat at, volutpat at est. Proin venenatis odio eu velit viverra consequat. Suspendisse ligula enim, porttitor et augue in, varius tempor sapien. Etiam fermentum mi ut diam dapibus blandit. Nam ac arcu in ligula dictum imperdiet eu id dolor. Nunc maximus, lacus sed laoreet accumsan, tortor arcu volutpat nisi, vitae varius augue eros id neque. In malesuada, est sed tempus hendrerit, enim diam tincidunt ex, sit amet semper leo nunc vel nunc. Cras a hendrerit nisi, nec interdum lorem. Nam vel diam at tellus imperdiet porttitor at ac odio. Nulla a diam vel enim iaculis blandit. Aenean id efficitur dolor, iaculis congue nisi.</p>
        <li><Link to='/'>Home</Link></li>
      </div>
  );
}

export default Rules