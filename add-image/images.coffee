
fetch = ->
    org = new Gh3.User("presidential-innovation-fellows")
    repo = new Gh3.Repository("mygov", org)
    repo.fetch( -> 
        repo.fetchBranches( ->
            master = repo.getBranchByName("gh-pages")
            master.fetchContents( ->
                img = master.getDirByName('images')
                img.fetchContents( ->
                    content = img.getDirByName('content')
                    content.fetchContents( ->
                        content.getContents()
                        content.eachContent( (image) ->
                            compiled = _.template( $('#image_template').html() )
                            $('#images').append( compiled( { name: image.name } ) )
                        )
                    )
                )
            )
        )
    )

$('.image a').live( 'click', ->
    compiled = _.template( $('#embed_code').html() )
    $('#output').val( compiled( { name: $(this).html(), alt: $('#caption').val(), caption: $('#caption').val(), credit: $('#credit').val(), credit_link: $('#credit_link').val() } ) )
)

$('#output').focus( ->
    $(this).select()
    $(this).mouseup( ->
        $(this).unbind('mouseup')
        false;
    )
)

fetch();