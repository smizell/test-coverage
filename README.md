# Test Coverage Doesn't Improve Code Quality

This repository shows the limitations with test coverage as valuable a metric for improving quality. The code shows there is 100% test coverage for all files, yet there is a huge bug not caught by test coverage.

## The Issue

I created an `alwaysTwelve` function that takes two inputs. If both inputs are `true`, the value is `12`. If both values are false, the value is still `12`. You can see how this happens if you check out `index.js`. These two tests are enough to get 100% coverage.

However, there is a bug. If the inputs are `true` and `false` or `false` and `true`, the value is not `12`, but rather `8` and `18` respectively. Though the coverage was 100%, it isn't enough to tell us there are untested paths through the function.

## The Reason

The `test.js` has only two tests that result in 100% coverage which means it covers every possible branch. However, two tests are not enough to cover all possible outcomes of two conditionals. To do so, you need 2^n tests, so far this case, it's 2^2 which is 4. If we had tested all possible conditions, we would have found the bug.

## A Note on Testing

This not only speaks to the limitations of test coverage as a metric. It also shows that it is impossible to rely on integration tests to cover all possible conditions in a program. 

For instance, if you had 20 `if` statements spread out across your application, it would take 2^20—or over one million—tests to cover all possible conditions. This would be the slowest test suite in the world, not to mention impossible to manage.

Most importantly, it shows integration tests are a bad solution for preventing bugs from making it into production.

So make smaller contexts to tests. Create well-defined boundaries. Use mostly unit tests. Don't rely on integration tests and test coverage to help you catch bugs because they'll fail you.
