import Fastify from 'fastify'

const fastify = Fastify({
    logger : true
})



fastify.listen({ port: 8999 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})