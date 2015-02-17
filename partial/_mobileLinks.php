<!-- 320-480 Phone -->
<div class="col-xs-3">
    <a href="#" data-toggle="modal" data-target="#320-480">
        <img class="img-responsive" src="../images/600x800_version_phone.png" alt="phone">
    </a>

    <!-- 320-480 Phone Modal -->
    <div class="modal fade" id="320-480" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="width: 350px; height: 600px;">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" style="color: #5F6657">320x480</h4>
                </div>
                <div class="modal-body">
                    <iframe src="/?hideFooter=1" width="320px" height="480px"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 480-320 Phone -->
<div class="col-xs-3">
    <a href="#" data-toggle="modal" data-target="#480-320">
        <img class="img-responsive fa-rotate-270" src="../images/600x800_version_phone.png" alt="phone">
    </a>

    <!-- 320-480 Phone Modal -->
    <div class="modal fade" id="480-320" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="width: 600px; height: 450px;">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" style="color: #5F6657">480x320</h4>
                </div>
                <div class="modal-body">
                    <iframe src="/?hideFooter=1" width="490px" height="320px"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 600-800 Tablet -->
<div class="col-xs-3">
    <a href="#" data-toggle="modal" data-target="#600-800">
        <img class="img-responsive" src="../images/600x800_version_tablet.png" alt="tablet">
    </a>

    <!-- 600-800 Tablet Modal -->
    <div class="modal fade" id="600-800" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="width: 630px; height: 920px;">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" style="color: #5F6657">600x800</h4>
                </div>
                <div class="modal-body">
                    <iframe src="/?hideFooter=1" width="600px" height="800px"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 800-600 Tablet -->
<div class="col-xs-3">
    <a href="#" data-toggle="modal" id="tablet-horizontal-button" data-target="#800-600">
        <img class="img-responsive fa-rotate-270" src="../images/600x800_version_tablet.png" alt="tablet">
    </a>

    <!-- 800-600 Tablet Modal -->
    <div class="modal fade" id="800-600" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="width: 920px; height: 730px;">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" style="color: #5F6657">800x600</h4>
                </div>
                <div class="modal-body">
                    <iframe src="/?hideFooter=1" id="tablet-horizontal" width="800px" height="600px"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    $('#tablet-horizontal-button').click(function (e) {
        $("#tablet-horizontal").contents().find("#sidebar").remove();
    });
</script>


