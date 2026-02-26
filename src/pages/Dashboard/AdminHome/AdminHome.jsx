import useAuth from '../../../hooks/useAuth'

function AdminHome() {

    const { user } = useAuth()

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className="cinzel-font text-2xl md:text-3xl lg:text-4xl font-bold  my-3 md:my-3 lg:my-4">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user?.displayName : "Back!"
                }
            </h1>

            <div className="mt-4 md:mt-5 lg:mt-7">
                <h2>context</h2>
            </div>
        </div>
    )
}

export default AdminHome