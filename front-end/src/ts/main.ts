// import sass file for webpack to process it. 
import '../scss/style';
// var $ = require("jquery"); uncomment this to include jquery in your bundle

import { SampleComponent } from './com/sample.component';
$(document).ready((e) =>
{
  // all component instantiations go here
  const sampleComponent = new SampleComponent();
});