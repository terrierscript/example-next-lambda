import { useRouter } from "next/router"

export default () => {
  const router = useRouter()
  console.log(router)
  const { id } = router.query
  return <div>id: {id}</div>
}
