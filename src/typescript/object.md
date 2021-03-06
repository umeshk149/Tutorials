# Object Types

- Ex - `Array<T>, Map<K, V>, Set<T>, and Promise<T>`

<vc-table>
<template v-slot:cola>

```ts
// way 1 - {}
function foo(x: { a: number; b: number }): number {
  // code
}

// way 2 - interface
interface fooInterface {
  a: number;
  b: number;
}

function foo(x: fooInterface) {
  // code
}
```

</template>
<template v-slot:colb>

```ts
// way 3 - Type alias

type fooType = {
  a: number;
  b: number;
};

function foo(x: fooType) {
  // code
}
```

</template>
</vc-table>

### undefined

```ts
// avoid undefined for optional property
// default value ->  y = 0
interface fooInterface {
  x: number;
  y?: number;
}

function foo({ x, y = 0 }: fooInterface) {
  return x + y;
}
```

### Readonly

```ts
interface xInterface {
  readonly x: number;
}

function foo(obj: fooInterface) {
  obj.x = 34; // error
}
```

### Extending

<vc-table>
<template v-slot:cola>

```ts
interface xInterface {
  x: number;
}
interface yInterface extends xInterface {
  y: number;
}
```

</template>
<template v-slot:colb>

```ts
interface xInterface {
  x: number;
}
interface yInterface {
  y: number;
}
interface xyInterface extends xInterface, yInterface {}

// intersection - almost same as extends
// difference is how error is handled
type xyType = xInterface & yInterface;
```

</template>
</vc-table>

### Generic

<vc-table>
<template v-slot:cola>

```ts
// interface
interface xyInterface<T> {
  x: T;
  y: T;
}

// usage
let num: xyInterface<number> = {
  x: 3,
  y: 6,
};
```

</template>
<template v-slot:colb>

```ts
// type alias
type xyType<T> = {
  x: T;
  y: T;
};

// we can use union
type xyOrNull<T> = xyType<T> | null;

// usage
let num: xyOrNull<number> = {
  x: 3,
  y: 6,
};

let num1: xyOrNull<null> = {
  x: null,
  y: null,
};

let num2: xyOrNull<null> = null;
```

</template>
</vc-table>
