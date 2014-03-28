# fruitmachine-bindAll

A [fruitmachine](http://github.com/ftlabs/fruitmachine) helper that binds all the methods in fruitmachine modules to each instance.

## Example

```js
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


```js
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

### Why isn't this the default behaviour of fruitmachine?
Because we believe it isn't always needed (and sometimes isn't expected).

## Author

- **Wilson Page** - [@wilsonpage](http://github.com/wilsonpage)

## Contributors

- **Wilson Page** - [@wilsonpage](http://github.com/wilsonpage)
- **Matt Andrews** - [@matthew-andrews](http://github.com/matthew-andrews)

## Credits and collaboration

All open source code released by FT Labs is licenced under the MIT licence. We welcome comments, feedback and suggestions. Please feel free to raise an issue or pull request.
