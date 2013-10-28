# fruitmachine-bindall

A [fruitmachine](http://github.com/ftlabs/fruitmachine) helper that binds all the methods in fruitmachine modules to each instance.

## Example

```
var Apple = fruitmachine.define({
  name: 'apple',
  initialize: function() {
    this.onButtonClick = this.onButtonClick.bind(this);
  },
  setup: function() {
    this.el.addEventListener('click', this.onButtonClick);
  },
  onButtonClick: function() {
    this.fire('buttonclick');
  },
  teardown: function() {
    this.el.removeEventListener('click', this.onButtonClick);
  }
});
```

... simplies to this ...


```
var Apple = fruitmachine.define({
  name: 'apple',
  helpers: [require('fruitmachine-bindall')],
  setup: function() {
    this.el.addEventListener('click', this.onButtonClick);
  },
  onButtonClick: function() {
    this.fire('buttonclick');
  },
  teardown: function() {
    this.el.removeEventListener('click', this.onButtonClick);
  }
});
```

(This makes more of an impact as modules become more complex)

## Why isn't this the default behaviour of fruitmachine?
Because we believe it isn't always needed (and sometimes isn't expected).
