const Foo = () => {
  return <div>foo</div>
}

Foo.getInitialProps = async () => {
  return "z"
}
export default Foo
